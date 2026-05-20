import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";

const SITE_URL = "https://robray.dev";
const DIST_DIR = join(process.cwd(), "dist/assets");
const BLOG_DIR = join(process.cwd(), "src/content/blog");

interface Post {
	slug: string;
	title: string;
	description: string;
	date: string;
	content: string;
}

async function getPosts(): Promise<Post[]> {
	const filenames = await readdir(BLOG_DIR);
	const posts = await Promise.all(
		filenames
			.filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
			.map(async (filename) => {
				const raw = await readFile(join(BLOG_DIR, filename), "utf8");
				const { data, content } = matter(raw);
				return {
					slug: filename.replace(/\.mdx?$/, ""),
					title: data.title || "",
					description: data.description || "",
					date: data.date || "",
					content,
				};
			}),
	);
	return posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);
}

function stripMdxComponents(content: string): string {
	return content
		.replace(/import\s+.*?from\s+['"].*?['"]\s*;?\n?/g, "")
		.replace(/<[A-Z][A-Za-z]*\s*\/>/g, "")
		.replace(/<[A-Z][A-Za-z]*[^>]*>[\s\S]*?<\/[A-Z][A-Za-z]*>/g, "")
		.trim();
}

async function generateLlmsTxt(posts: Post[]): Promise<void> {
	const lines = [
		"# Richard Oliver Bray",
		"",
		"> Personal site of Richard Oliver Bray — developer educator, YouTuber, and creator of developer-focused video content.",
		"",
		"## Pages",
		"",
		`- [Home](${SITE_URL}/)`,
		`- [Blog](${SITE_URL}/blog)`,
		`- [Contact](${SITE_URL}/contact)`,
		"",
		"## Blog Posts",
		"",
		...posts.map(
			(p) =>
				`- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`,
		),
		"",
		"## Optional",
		"",
		`- [Full content as markdown](${SITE_URL}/llms-full.txt)`,
		"",
	];
	await writeFile(join(DIST_DIR, "llms.txt"), lines.join("\n"));
	console.log("Generated llms.txt");
}

async function generateLlmsFullTxt(posts: Post[]): Promise<void> {
	const sections = posts.map((p) => {
		const clean = stripMdxComponents(p.content);
		return `# ${p.title}\n\n> ${p.description}\n\nDate: ${p.date}\n\n${clean}`;
	});

	const full = [
		"# Richard Oliver Bray — Full Site Content",
		"",
		"> All blog posts from robray.dev in markdown format.",
		"",
		"---",
		"",
		sections.join("\n\n---\n\n"),
		"",
	].join("\n");

	await writeFile(join(DIST_DIR, "llms-full.txt"), full);
	console.log("Generated llms-full.txt");
}

async function generateBlogMarkdown(posts: Post[]): Promise<void> {
	const blogMdDir = join(DIST_DIR, "blog");
	await mkdir(blogMdDir, { recursive: true });

	for (const post of posts) {
		const clean = stripMdxComponents(post.content);
		const md = `# ${post.title}\n\n> ${post.description}\n\nDate: ${post.date}\nAuthor: Richard Oliver Bray\n\n${clean}\n`;
		await writeFile(join(blogMdDir, `${post.slug}.md`), md);
	}
	console.log(`Generated ${posts.length} blog .md files`);
}

async function main(): Promise<void> {
	const posts = await getPosts();
	await Promise.all([
		generateLlmsTxt(posts),
		generateLlmsFullTxt(posts),
		generateBlogMarkdown(posts),
	]);
}

main();
