"use client";

const Hero: React.FC = () => {
  const scrollToSignup = () => {
    const signupElement = document.getElementById('kitform');
    if (signupElement) {
      signupElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 
          className="text-4xl md:text-7xl font-bold text-primary-900 mb-6 whitespace-pre-line" 
          style={{ fontFamily: "'Fugaz One', cursive" }}
        >
          {"Grow Your Developer\nAudience With Video"}
        </h1>
        <p className="text-xl text-primary-600 max-w-3xl mx-auto mb-8 font-sans">
          Learn how to reach millions of developers with short form video content that engages and converts.
        </p>
        <button 
          onClick={scrollToSignup}
          className="text-white font-bold py-3 px-8 rounded-md shadow-md transition-colors hover:opacity-90 cursor-pointer text-lg"
          style={{ backgroundColor: 'var(--color-orange)' }}
        >
          Join The Waiting List
        </button>
      </div>
    </section>
  );
};

export default Hero;
