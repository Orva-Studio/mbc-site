import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const postsDirectory = join(process.cwd(), 'src/content/blog');
    const filenames = await readdir(postsDirectory);
    
    const posts = await Promise.all(
      filenames
        .filter(name => name.endsWith('.mdx'))
        .map(async (filename) => {
          if (typeof filename !== 'string') {
            throw new Error('Invalid filename type');
          }
          const fullPath = join(postsDirectory, filename);
          const fileContents = await readFile(fullPath, 'utf8');
          const { data, content } = matter(fileContents);
          
          return {
            slug: filename.replace(/\.mdx$/, ''),
            title: data.title || '',
            description: data.description || '',
            date: data.date || '',
            author: data.author || '',
            content,
          } as BlogPost;
        })
    );
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error as Error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    if (!slug || typeof slug !== 'string') {
      console.error('Invalid slug:', slug, typeof slug);
      return null;
    }
    
    // Clean the slug
    const cleanSlug = slug.trim();
    const fullPath = join(process.cwd(), 'src/content/blog', `${cleanSlug}.mdx`);
    const fileContents = await readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || '',
      content,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (_error) {
    return dateString;
  }
}