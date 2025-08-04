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
            The Secrets to Amazing Developer Content
          </h2>
          <div className="g-primary-200 flex items-center justify-center overflow-hidden">
            <img
              src="/images/rob_pic.png"
              alt="Richard Oliver Bray"
              width="768"
              className="w-full max-w-lg"
              height="443"
            />
          </div>
          <div className="text-xl">
            <p className="mt-8 mb-8">
              Hi, I'm Richard Oliver Bray. I've been making technical short-form videos for over <strong>2 years</strong>, created <strong>300+ videos</strong> across two accounts, with several hitting <strong>a million views</strong> on Instagram. Here are some of the videos I'm really proud of 👇
            </p>
            <div className="mb-8 flex flex-col sm:flex-row gap-4 sm:gap-2">
              <a href="https://www.instagram.com/reel/DBB65kGADmx/?hl=en" className="w-full sm:w-auto">
                <img
                  src="/images/insta_1.png"
                  alt="Popular Instagram Reel"
                  width="227"
                  height="354"
                  className="w-full sm:w-auto"
                />
              </a>
              <a href="https://www.instagram.com/reel/C2hSdgiMCoL/" className="w-full sm:w-auto">
                <img
                  src="/images/insta_2.png"
                  alt="Popular Instagram Reel"
                  width="227"
                  height="354"
                  className="w-full sm:w-auto"
                />
              </a>
              <a href="https://www.instagram.com/reel/DDgp5Y1AIIl/" className="w-full sm:w-auto">
                <img
                  src="/images/insta_3.png"
                  alt="Popular Instagram Reel"
                  width="227"
                  height="354"
                  className="w-full sm:w-auto"
                />
              </a>
            </div>
            <p className="mb-8">
              I've been a full-stack web developer making videos on the side for a while and loved it so much, that in September 2023, decided to quit my job and fully focus on videos. Specifically videos about tech that developers would love to watch.
            </p>
            <p>
  Am I the best creator out there? Far from it. But I know a few things about making short videos that developers actually want to watch, and I'm sharing <strong>everything I've learned completely FREE</strong>
            </p>
          </div>
          <h3 className="text-2xl font-bold font-sans text-primary-800 mt-8 mb-4" style={{'fontFamily':"'Fugaz One', cursive"}}>What You'll Learn</h3>
          <ul className="text-primary-700 text-lg mb-6 font-sans space-y-2">
            <li className="flex items-start">
              <span className="text-orange mr-2 mt-1">•</span>
              <span>💭 Coming up with <strong>video ideas</strong> that developers actually want to watch</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-2 mt-1">•</span>
              <span><strong>📝 Script writing techniques</strong> that will engage for longer</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-2 mt-1">•</span>
              <span><strong>📹 Recording equipment</strong> recommendations that won't break the bank</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-2 mt-1">•</span>
              <span><strong>🎬 Editing tips</strong> and everything in-between to make engaging shorts</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-2 mt-1">•</span>
              <span>🚀 And <strong>much more!</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blurb;
