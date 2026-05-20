# robray.dev

Personal site of Richard Oliver Bray — developer educator, YouTuber, and creator of developer-focused video content. Built with Waku, TypeScript, and Tailwind CSS, deployed on Cloudflare Workers.

## Tech Stack

- **Framework**: [Waku](https://waku.gg/) (React-based SSG)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Runtime**: Bun
- **Deployment**: Cloudflare Workers

## Getting Started

Requires [Bun](https://bun.sh/).

```bash
bun install
bun dev
```

The site will be available at `http://localhost:3000`.

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server |
| `bun run build` | Build for production (Cloudflare Workers) |
| `bun start` | Start production server |
| `wrangler deploy` | Deploy to Cloudflare Workers |

## Project Structure

```
src/
├── components/          # React components (lowercase filenames, PascalCase exports)
│   ├── blurb.tsx
│   ├── bookimage.tsx
│   ├── darkmodetoggle.tsx
│   ├── faq.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── icons.tsx
│   ├── kitform.tsx
│   ├── mdx-renderer.tsx
│   ├── navbar.tsx
│   └── seo.tsx
├── content/blog/        # Blog posts (MDX with YAML frontmatter)
├── lib/blog.ts          # Blog utilities (parsing, sorting, reading time)
├── pages/
│   ├── _layout.tsx      # Global layout
│   ├── _root.tsx        # Root wrapper
│   ├── index.tsx        # Homepage
│   ├── blog.tsx         # Blog listing
│   ├── blog/[slug].tsx  # Individual blog post
│   ├── book.tsx         # Book page
│   └── contact.tsx      # Contact page
├── serve-cloudflare.ts  # Cloudflare Worker entry point
└── styles.css           # Global styles + CSS variables
```

## License

This project is private and proprietary.