// Optimize a single image with Bun.image
// Take the 4.3MB profile pic → resize and convert to webp

const input = "public/images/profile_pic_original.png";
const output = "public/images/profile_pic_optimized.webp";

const before = Bun.file(input).size;

const after = await Bun.file(input)
  .image()
  .resize(800)
  .webp({ quality: 80 })
  .write(output);

console.log(`Before: ${(before / 1024 / 1024).toFixed(1)} MB`);
console.log(`After:  ${(after / 1024).toFixed(0)} KB`);
console.log(`Saved:  ${(((before - after) / before) * 100).toFixed(0)}%`);
