"use client";

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: "What makes this book different from other video creation guides?",
      answer: "This book is specifically tailored for developers and technical content creators. Unlike general video guides, it focuses on the unique challenges of explaining complex technical concepts in short-form videos that engage developer audiences."
    },
    {
      question: "Do I need expensive equipment to implement these techniques?",
      answer: "Not at all! The book covers options for all budget levels, from smartphone setups to professional equipment. The focus is on content strategy and presentation techniques that work regardless of your equipment."
    },
    {
      question: "I'm not a natural on camera. Will this still work for me?",
      answer: "Absolutely! The book includes specific techniques for camera-shy developers, including script preparation, practice methods, and even ways to create engaging content without showing your face if preferred."
    },
    {
      question: "How long will it take to see results?",
      answer: "While results vary, most developers who consistently apply these techniques see noticeable growth in engagement within 4-6 weeks. The book includes a 90-day implementation plan to help you track progress."
    },
    {
      question: "Which platforms does this method work best for?",
      answer: "The Gut Punch Method works across all major platforms including Instagram, TikTok, YouTube Shorts, and LinkedIn. The book includes platform-specific tips for optimizing content on each."
    },
    {
      question: "Is this only for individual creators or can companies use it too?",
      answer: "Both! The techniques work equally well for individual developer advocates and for company technical marketing teams. There are specific sections addressing both use cases."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
