import React from 'react';

const Blurb: React.FC = () => {
  return (
    <section className="pb-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-primary">
          <h2 
            className="text-3xl font-bold font-sans text-primary-900 text-center mb-8"
            style={{ fontFamily: "'Fugaz One', cursive" }}
          >
            The Secret to Viral Developer Content
          </h2>

          <p className="text-primary-700 mb-6 font-sans text-lg">
            I've been making technical short-form videos for over <strong>2 years</strong>, created <strong>300+ videos</strong> across two accounts, with several hitting <strong>a million views</strong> on Instagram. Am I the best creator out there? Far from it. But I know a few things about making short videos that developers actually want to watch, and I'm sharing <strong>everything I've learned—completely free</strong>.
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
              <span>And <strong>much more!</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blurb;
