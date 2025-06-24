"use client";

import { useState } from "react";

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
    alert('Thank you for signing up! Check your email for your free book.');
    setEmail('');
  };

  return (
    <section id="signup" className="py-16 bg-primary-50 text-white p-4 rounded-2xl" style={{backgroundColor: 'var(--color-orange)'}}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-sans text-primary-900 mb-6">Get the First 3 Chapters</h2>
        <p className="text-lg text-primary-700 max-w-2xl mx-auto mb-8 font-sans">
          Enter your email to get the first 3 chapters of "60 Seconds To Millions" completely free. 
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-3 rounded-md border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button 
              type="submit"
              className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-6 rounded-md shadow-md transition-colors"
            >
              Get It Free
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
