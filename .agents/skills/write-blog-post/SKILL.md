---
name: write-blog-post
description: Turn a spoken transcript or voice note into a finished blog post for makebettercontent.dev in Richard's voice, with a generated hero image. Use when the user pastes a transcript, voice note, or rough ramble and asks for a blog post from it.
---

# Write Blog Post

Turn a transcript into a publishable `.mdx` post in `src/content/blog/`, written the way Richard writes, with one generated hero image.

## 1. Read the voice first

Before writing, read 2-3 existing posts in `src/content/blog/` (newest first by `date`) to re-tune to the voice. The traits that matter:

- **First person, conversational, honest.** Talks to the reader like a colleague. Admits uncertainty ("short answer: I don't know"), self-deprecates, and owns opinions.
- **Short paragraphs.** One to four sentences each. Plenty of white space.
- **Personal anecdote as the hook.** Open with the situation that prompted the post (a conversation, a bug, an outage), not a thesis statement.
- **Bold for key phrases**, a few per section, never whole sentences. Occasional _'italic quotes'_ for things someone said or typed.
- **British spelling** (realise, colour, favourite) and casual asides ("Anyway,", "To be fair,", "by the way").
- **`##` headings that make a point**, short and opinionated, not generic labels like "Introduction" or "Conclusion". Roughly one every 2-4 paragraphs.
- **Lists only where the content is genuinely a list.** Prose otherwise.
- **A light sign-off.** Often an invitation to reply on [Twitter/X](https://x.com/RichOBray), sometimes "Happy coding 👋".

## 2. Write the post from the transcript

Rewrite the transcript fully into blog prose. Don't transcribe it.

- Keep every idea, example, and opinion the user actually said, and keep their phrasing where it's strong. Don't add arguments, facts, or examples they didn't make.
- Drop filler, false starts, repetition, and dictation artefacts. When a sentence is garbled by speech-to-text, recover the evident meaning from context. If the meaning really can't be recovered, cut it rather than invent it, and mention the cut to the user.
- Reorder ideas when that makes a clearer argument. Several pasted notes that continue each other become one post.
- Only use idioms and turns of phrase that already appear in the existing posts or the transcript. Don't import British-isms or stock phrases Richard doesn't use (e.g. "a bit rich"). His go-to asides are "To be fair,", "Anyway,", "It's silly, I know", "I'll be open and say".
- Avoid AI-writing tells: no "In today's fast-paced world", no "Let's dive in", no em-dash chains, no "It's not just X, it's Y" constructions, no closing summary that repeats the post.
- Aim for the length of existing posts (roughly 600-1200 words) unless the transcript is much shorter.
- Link people, products, films, games, and tools a reader might look up. Verify each URL with a web search, never guess. Use relative paths for internal links (`/book`, `/contact`).
- Mark spoilers or caveats the user flagged.

## 3. Frontmatter

```mdx
---
title: "Short, punchy, opinionated title"
description: "One sentence hook in the user's voice"
date: "YYYY-MM-DD"
author: "Richard Oliver Bray"
---
```

- `date` is today's date.
- Filename is a short kebab-case slug: `src/content/blog/<slug>.mdx`.
- Titles read like the existing ones: personal, a little provocative, no clickbait numbers.

## 4. Hero image (one per post)

Every post has exactly one hero image, placed right after the frontmatter and before the first paragraph:

```mdx
![Descriptive alt text](/images/blog/<slug>.jpg)
```

Generate it with the bundled script, which uses `OPENAI_API_KEY` and falls back to `REPLICATE_API_TOKEN`:

```bash
.agents/skills/write-blog-post/scripts/hero-image.sh "<prompt>" public/images/blog/<slug>.jpg
```

- Write a prompt for a **photographic scene that is thematically related but not literal**. Past heroes: a saluting soldier for "allegiance", a vinyl record for a post about a vinyl app, server cables for MCP. The script appends the house style (cinematic photo, no text) and crops to the wide banner ratio.
- Never depict real people, brands, logos, or copyrighted characters in a generated image.
- Look at the generated image before using it. Regenerate with a revised prompt if it has text artefacts, mangled hands, or looks obviously synthetic.
- Optional extra images inside the post (a film still, a game screenshot) may be found online when they really help. Prefer official press kits or Wikimedia Commons, download into `public/images/blog/`, and tell the user the source so they can judge the rights.

## 5. X Article version (when asked)

Rewrite the finished post as an X Article in `drafts/x/<slug>.md`. It's the same argument and voice, tuned to how X's own guidance and the creator data say Articles get read:

- **The first ~280 characters show in the timeline card,** so the opening two sentences carry the hook. Lead with the person or situation, then the tension.
- **Cut 20-30%.** One idea per paragraph, mostly one or two sentences. Drop asides that only work on the blog.
- **A subheading every 200-400 words**, and bold the key insight in almost every section.
- **@mention real people and companies** instead of linking them (e.g. `@CalebPeffer`, `@firecrawl`). Keep other outbound links to a minimum, because X deprioritises them.
- **Start with a cross-post line** directly under the title, in italics: `_Also posted on my blog: [robray.dev/blog/<slug>](https://robray.dev/blog/<slug>)_`.
- **End with a question** that invites replies.
- **Cover image:** reuse the blog hero (`public/images/blog/<slug>.jpg`). Its banner ratio works as an X cover.

X's editor ignores pasted markdown, so render a copy-paste page:

```bash
bun .agents/skills/write-blog-post/scripts/x-article-preview.ts drafts/x/<slug>.md
```

Open the resulting `.html`, select all, copy, and paste into the Articles editor on x.com (desktop only, Premium required).

## 6. Check and hand over

- Run `bun dev` and open `http://localhost:3000/blog/<slug>` to confirm the post renders, if the dev server can be started.
- Give the user the title, slug, word count, the image prompt used, and any transcript passages you cut or interpreted. Don't commit until they've reviewed it.
