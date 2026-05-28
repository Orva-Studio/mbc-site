---
name: polish-blog-post
description: Improve blog post readability with headings, lists, links, and images
---

# Polish Blog Post

Make an existing blog post easier to read and scan. The user will tell you which post to work on.

## Steps

### 1. Read the post

Read the `.mdx` file in `src/content/blog/` and assess what's missing.

### 2. Add section headings

- Break up long stretches of text with `##` headings.
- Headings should be short, opinionated, and reflect the point of the section — not generic labels.
- Don't add a heading right after the frontmatter — the title already serves that purpose. If there's a hero image, put it before the first heading.
- Aim for a heading every 2-4 paragraphs. Don't over-split.

### 3. Convert to lists where natural

- Look for sequential items written as prose ("One,... Two,... Three,...", "first... second... third...").
- Convert these to numbered or bulleted lists.
- Keep the original wording — just restructure the format.

### 4. Add links to mentioned tools, people, and projects

- Link tools, frameworks, people, and products that readers might want to look up.
- Use the correct, verified URL — search the web if unsure. Don't guess.
- Don't over-link. Skip obvious things everyone knows (e.g. Spotify, Google). Focus on developer tools, open source projects, and people whose work is relevant.
- Use relative paths for internal links (e.g. `/book` not `https://makebettercontent.dev/book`).

### 5. Add a hero image if missing

- If the post has no image after the frontmatter, find a relevant one on Unsplash.
- Download it to `public/images/blog/` with a descriptive filename.
- Add it as `![Alt text](/images/blog/filename.jpg)` right after the frontmatter, before the first heading or paragraph.
- Pick images that are thematically relevant but not too literal.

### 6. Don't change the writing

- Don't rewrite sentences, fix grammar, or change the author's voice.
- Only restructure (headings, lists) and add (links, images).
- Small typo fixes are fine if you spot them, but don't go looking.

### 7. Show the user what changed

After making changes, summarise what you added: headings, links, lists, and image. Let the user review before committing.
