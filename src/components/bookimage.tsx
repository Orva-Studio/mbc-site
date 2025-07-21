"use client";

import React from 'react';

const BookImage: React.FC = () => {

  const scrollToSignup = () => {
    const signupElement = document.getElementById('kitform');
    if (signupElement) {
      signupElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block">
          {/* Book cover image with shadow and perspective */}
          <div 
            className="
              w-64
              h-[32rem]
              md:w-80
              md:h-[32rem]
              mx-auto
              rounded-lg
              cursor-pointer
              shadow-2xl
              transform
              rotate-3
              transition-transform
              hover:rotate-0
              duration-300
              overflow-hidden
            "
          onClick={scrollToSignup}
          >
            <img 
              src="/images/book_cover.png" 
              alt="Make Better Content - How to Reach Millions of Developers with Short Form Video"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookImage;
