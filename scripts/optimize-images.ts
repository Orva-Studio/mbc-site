const imageDir = "public/images/blog";
const outputDir = "public/images-optimized/blog";
const glob = new Bun.Glob("*.{png,jpg,jpeg}");

await Bun.$`mkdir -p ${outputDir}`;

const placeholders: Record<string, string> = {};

for await (const file of glob.scan({ cwd: imageDir })) {
  const input = `${imageDir}/${file}`;
  const webpName = file.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  await new Bun.Image(input)
    .resize(1200, undefined, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .write(`${outputDir}/${webpName}`);

  const placeholder = await new Bun.Image(input).placeholder();
  placeholders[file] = placeholder;
  console.log(`  ${file.padEnd(40)} placeholder: ${placeholder.length} bytes`);
}

await Bun.write(
  "src/image-placeholders.ts",
  `export const placeholders: Record<string, string> = ${JSON.stringify(placeholders, null, 2)};\n`,
);
