const imageDir = "public/images/blog";
const outputDir = "public/images-optimized/blog";
const placeholderDir = "public/images-optimized/placeholders/blog";
const glob = new Bun.Glob("*.{png,jpg,jpeg}");

await Bun.$`mkdir -p ${outputDir} ${placeholderDir}`;

for await (const file of glob.scan({ cwd: imageDir })) {
  const input = `${imageDir}/${file}`;
  const webpName = file.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  // Optimized image
  await new Bun.Image(input)
    .resize(1200, undefined, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .write(`${outputDir}/${webpName}`);

  // Tiny placeholder you can open and see
  await new Bun.Image(input)
    .resize(32)
    .webp({ quality: 20 })
    .write(`${placeholderDir}/${webpName}`);

  const size = Bun.file(`${placeholderDir}/${webpName}`).size;
  console.log(`  ${file.padEnd(40)} placeholder: ${size} bytes`);
}
