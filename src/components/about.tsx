
function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl font-bold font-sans text-primary-900 mb-12 text-center"
          style={{ fontFamily: "'Fugaz One', cursive" }}
        >
          Who's the Author?
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 flex items-center justify-center overflow-hidden">
              <img
                src="/images/richard-oliver-bray.jpg"
                alt="Richard Oliver Bray"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-4 text-primary-700 leading-relaxed">
              <p>
                Hi I'm <strong>Richard Oliver Bray</strong>, a <strong>web developer turned content creator</strong> who specialising in making <strong>content for developers</strong>. Kind of makes sense. I've been creating content on the side for a while and now I do it <strong>full time</strong>. It's incredibly different doing something as a <strong>hobby</strong> and doing it as a <strong>job</strong>, you learn so much more and get to experiment from doing something <strong>day in and day out</strong>.
              </p>
              
              <p>
                So I want to share these <strong>learnings</strong> with you. The things that have worked well for me when it comes to making <strong>engaging content for developers</strong>. Things they will <strong>watch, learn from and share</strong> with others. The focus at the moment is a book about <strong>short form video</strong> but I have so much to teach not just about <strong>short videos</strong>, but <strong>long videos</strong> and even <strong>newsletters</strong>.
              </p>
              
              <p>
                So if <strong>shorts aren't your thing</strong>, don't worry I'm sure there's something I've learnt that I can teach you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
