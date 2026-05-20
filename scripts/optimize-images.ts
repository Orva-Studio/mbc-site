// Batch optimize every image in public/images
// Resize anything over 1200px wide, convert to webp, generate thumbhash placeholders

const imageDir = "public/images";
const outputDir = "public/images-optimized";
const glob = new Bun.Glob("**/*.{png,jpg,jpeg}");

await Bun.$`mkdir -p ${outputDir}`;

let totalBefore = 0;
let totalAfter = 0;

console.log("\n⚡ Optimizing images...\n");

for await (const file of glob.scan({ cwd: imageDir })) {
  const input = `${imageDir}/${file}`;
  const output = `${outputDir}/${file.replace(/\.(png|jpg|jpeg)$/i, ".webp")}`;

  // make sure subdirectories exist
  await Bun.$`mkdir -p ${output.split("/").slice(0, -1).join("/")}`;

  const before = Bun.file(input).size;

  const after = await Bun.file(input)
    .image()
    .resize(1200, undefined, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .write(output);

  totalBefore += before;
  totalAfter += after;

  const saved = (((before - after) / before) * 100).toFixed(0);
  console.log(`  ${file.padEnd(40)} ${saved}% smaller`);
}

// Generate thumbhash placeholders and save to a file
console.log("\n🖼️  ThumbHash placeholders:\n");

const placeholders: Record<string, string> = {};

for await (const file of glob.scan({ cwd: imageDir })) {
  const placeholder = await Bun.file(`${imageDir}/${file}`).image().placeholder();
  placeholders[file] = placeholder;
  console.log(`  ${file.padEnd(40)} ${placeholder.length} bytes`);
}

await Bun.write(
  "src/image-placeholders.ts",
  `export const placeholders: Record<string, string> = ${JSON.stringify(placeholders, null, 2)};\n`,
);

// Summary
const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
const savedPct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0);
console.log(`\n🎉 Saved ${savedMB} MB total (${savedPct}% reduction)\n`);
