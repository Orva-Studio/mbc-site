export default async function HomePage() {
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
          <p className="text-primary-600 mb-8 text-lg md:text-xl leading-relaxed">
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
            className="w-full max-w-lg mx-auto md:mx-0 max-h-[400px] object-contain rounded-full"
            height="443"
          />
        </article>
      </section>
    </div>
  );
}
