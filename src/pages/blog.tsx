import { Link } from 'waku';
import { getAllPosts, formatDate, type BlogPost } from '../lib/blog';

export default async function BlogPage() {
  const data = await getData();
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-primary-900">{data.headline}</h1>
      <p className="text-lg text-primary-600 mb-8">{data.description}</p>
      
      <div className="space-y-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-primary-500">Blog posts coming soon!</p>
            <p className="text-primary-400 mt-2">Check back later for content creation tips and insights.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="border border-primary-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="mb-2">
        <time className="text-sm text-primary-500">{formatDate(post.date)}</time>
      </div>
      
      <h2 className="text-2xl font-bold mb-3 text-primary-900">
        <Link to={`/blog/${post.slug}`} className="hover:text-primary-700 transition-colors">
          {post.title}
        </Link>
      </h2>
      <p className="text-primary-600 mb-4">{post.description}</p>
    </article>
  );
}

const getData = async () => {
  const data = {
    title: 'Blog - Make Better Content',
    headline: 'Blog',
    description: 'Tips, insights, and strategies for growing your developer audience with.',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
