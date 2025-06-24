import React from 'react';

const Blurb: React.FC = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-primary">
          <h2 className="text-3xl font-bold font-sans text-primary-900 text-center mb-8">The Secret to Viral Developer Content</h2>

          <p className="text-primary-700 mb-6 font-sans text-lg">
            I've been making technical short-form videos for over 2 years, created 300+ videos across two accounts, with several hitting a million views on Instagram. Am I the best creator out there? Far from it. But I know a few things about making short videos that developers actually want to watch, and I'm sharing everything I've learned—completely free.
          </p>
          <p className="text-primary-700 mb-6 font-sans text-lg">
            This isn't theory or fluff. These are <strong>proven strategies</strong> that have worked in the <strong>real world</strong>. I'll get <strong>straight to the point</strong> with minimal waffle, covering everything from <strong>idea generation to editing</strong>. If you have a product or service to sell and want to <strong>massively grow your reach</strong> with shorts, this is for you.
          </p>
          <h3 className="text-xl font-bold font-sans text-primary-800 mt-8 mb-4">What You'll Learn</h3>
          <ul className="text-primary-700 mb-6 font-sans space-y-2">
            <li className="flex items-start">
              <span className="text-orange mr-2 mt-1">•</span>
              <span>How to come up with <strong>video ideas</strong> that developers actually want to watch</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-2 mt-1">•</span>
              <span><strong>Script writing techniques</strong> that work (no fluff, just what gets results)</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-2 mt-1">•</span>
              <span><strong>Recording equipment</strong> recommendations that won't break the bank</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-2 mt-1">•</span>
              <span><strong>Editing tips</strong> and everything in-between to make engaging shorts</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-2 mt-1">•</span>
              <span>How to systematically <strong>grow your reach</strong> if you have something to sell</span>
            </li>
          </ul>
          <p className="text-primary-700 mb-4 font-sans">
            Ready to turn your expertise into engaging content that grows your audience? Let's dive in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blurb;
