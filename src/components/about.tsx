
function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-sans text-primary-900 mb-12 text-center">
            About the Author
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-primary-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/richard-oliver-bray.jpg"
                  alt="Richard Oliver Bray"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-semibold font-sans text-primary-800 mb-4">
                Richard Oliver Bray
              </h3>
              
              <div className="space-y-4 text-primary-700 leading-relaxed">
                <p>
                  Richard Oliver Bray is an entrepreneur, business strategist, and author who has dedicated his career to helping individuals and businesses achieve rapid growth and success. With over a decade of experience in business development and strategic planning, Richard has worked with companies of all sizes to unlock their potential.
                </p>
                
                <p>
                  His unique approach combines practical business acumen with innovative thinking, allowing him to identify opportunities that others might miss. Richard's methodology has helped countless entrepreneurs transform their ideas into profitable ventures in record time.
                </p>
                
                <p>
                  In "60 Seconds To Millions," Richard shares the proven strategies and insights that have made him a sought-after consultant and speaker. His work has been featured in various business publications, and he continues to mentor the next generation of entrepreneurs.
                </p>
                
                <p>
                  When he's not writing or consulting, Richard enjoys traveling, reading about emerging technologies, and spending time with his family. He believes that success is not just about financial gain, but about creating value and making a positive impact in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
