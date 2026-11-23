// Usage: bun .agents/skills/write-blog-post/scripts/x-article-preview.ts drafts/x/<slug>.md
// X's Article editor ignores pasted markdown but keeps rich text, so render to HTML,
// open it, select all, copy, and paste into x.com/compose/articles.
import { micromark } from 'micromark';

const input = Bun.argv[2];
if (!input) throw new Error('markdown path required');

const body = micromark(await Bun.file(input).text());
const output = input.replace(/\.md$/, '.html');
await Bun.write(
  output,
  `<!doctype html><meta charset="utf-8"><title>X Article draft</title>
<style>body{max-width:640px;margin:40px auto;padding:0 16px;font:18px/1.6 system-ui;color:#0f1419;background:#fff}img{max-width:100%;height:auto;display:block;margin:24px 0}</style>
${body}`,
);
console.log(output);
