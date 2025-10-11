
import { getPostBySlug, formatDate, getAllPosts, getAdjacentPosts, calculateReadingTime} from '../../lib/blog';

import KitForm from "../../components/kitform";
import { MDXRenderer } from '../../components/mdx-renderer';
import { SEO, StructuredData } from '../../components/seo';

export default async function BlogPostPage({ slug }: { slug: string }) {
  // Ensure slug is a string
  const postSlug = String(slug || '');
  const post = await getPostBySlug(postSlug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Post Not Found</h1>
        <p className="text-primary-600 mb-8">The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  const { previous, next } = await getAdjacentPosts(postSlug);
  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title={`${post.title} - Make Better Content`}
        description={post.description}
        url={`/blog/${post.slug}`}
        {...(post.featuredImage && { imageUrl: post.featuredImage })}
        type="article"
        author={post.author}
        publishedDate={post.date}
      />
      <StructuredData
        type="Article"
        title={post.title}
        description={post.description}
        url={`/blog/${post.slug}`}
        {...(post.featuredImage && { imageUrl: post.featuredImage })}
        author={post.author}
        publishedDate={post.date}
      />
      
      <article className="my-8 max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-primary-500 mb-6">
            <time>{formatDate(post.date)}</time>
            <span>by {post.author}</span>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
          
          <p className="text-xl text-primary-600">{post.description}</p>
        </header>

        <div className="prose prose-lg max-w-none mb-8">
          <MDXRenderer content={post.content} />
        </div>

        <hr />

        <nav className="mt-8 flex justify-between items-center">
          {previous ? (
            <a 
              href={`/blog/${previous.slug}`}
              className="flex flex-col items-start text-primary-600 hover:text-primary-800 transition-colors"
            >
              <span className="text-sm text-primary-500 mb-1">← Previous</span>
              <span className="font-medium">{previous.title}</span>
            </a>
          ) : (
            <div />
          )}
          
          {next ? (
            <a 
              href={`/blog/${next.slug}`}
              className="flex flex-col items-end text-primary-600 hover:text-primary-800 transition-colors"
            >
              <span className="text-sm text-primary-500 mb-1">Next →</span>
              <span className="font-medium">{next.title}</span>
            </a>
          ) : (
            <div />
          )}
        </nav>
      </article>
      <KitForm />
    </div>
  );
}

export async function getConfig() {
  const posts = await getAllPosts();
  
  return {
    render: 'static',
    staticPaths: posts.map(post => post.slug),
  } as const;
}
