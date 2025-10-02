import { Link } from 'waku';
import { getAllPosts, formatDate, type BlogPost } from '../lib/blog';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mx-auto mt-4 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 justify-center">
        <article className="flex-1 text-center md:text-left max-w-2xl">
          <h1 
            className="text-5xl md:text-8xl font-bold text-primary-900 mb-8 whitespace-pre-line leading-tight" 
            style={{ fontFamily: "'Fugaz One', cursive" }}
          >
            Hello...
          </h1>
          <p className="text-primary-600 mb-8 text-lg md:text-xl leading-loose">
            I'm <strong>Richard Oliver Bray</strong>. <br />
            I quit my full stack developer job in 2023 to focus on <strong>educating developers through video</strong>.
            
            This site exists to share my processes, thoughts to help others follow in my footsteps.
          </p>
          <a 
            href="/book" 
            className="text-white font-bold py-3 px-8 rounded-md shadow-md transition-colors hover:opacity-90 cursor-pointer text-xl inline-block"
            style={{ backgroundColor: 'var(--color-orange)' }}
          >
           I'm also writing a book
          </a>
        </article>
        <article className="w-full md:w-auto">
          <img
            src="/images/profile_pic.png"
            alt="Richard Oliver Bray"
            width="768"
            className="max-w-lg mx-auto md:mx-0 max-h-[400px] rounded-full w-auto"
            height="443"
          />
        </article>
      </section>

      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Latest Blog Posts</h2>
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
      </section>
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
