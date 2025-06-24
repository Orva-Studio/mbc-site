import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      quote: "This book completely transformed my approach to creating developer content. I went from 100 followers to over 10,000 in just 3 months using these techniques!",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Michael Chen",
      role: "Tech Startup Founder",
      quote: "The Gut Punch Method helped us reach our target audience more effectively than any marketing strategy we've tried before. Our developer community has grown exponentially.",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Priya Patel",
      role: "DevRel Specialist",
      quote: "I was skeptical at first, but the results speak for themselves. My technical videos now consistently get 5x more engagement using the frameworks in this book.",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Developers Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name}'s avatar`} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
