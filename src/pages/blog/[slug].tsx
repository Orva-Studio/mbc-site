import { Link } from 'waku';
import { getPostBySlug, formatDate, getAllPosts, type BlogPost } from '../../lib/blog';
import { MDXRenderer } from '../../components/mdx-renderer';

export default async function BlogPostPage({ slug }: { slug: string }) {
  console.log('BlogPostPage received slug:', slug, typeof slug);
  
  // Ensure slug is a string
  const postSlug = String(slug || '');
  const post = await getPostBySlug(postSlug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Post Not Found</h1>
        <p className="text-primary-600 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="text-primary-600 hover:text-primary-800 transition-colors underline">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <title>{post.title} - Make Better Content</title>
      
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Link to="/blog" className="text-primary-600 hover:text-primary-800 transition-colors underline mb-4 inline-block">
            ← Back to blog
          </Link>
          
          <h1 className="text-4xl font-bold text-primary-900 mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-primary-500 mb-6">
            <time>{formatDate(post.date)}</time>
            <span>by {post.author}</span>
          </div>
          
          <p className="text-xl text-primary-600">{post.description}</p>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <MDXRenderer content={post.content} />
        </div>
      </article>
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