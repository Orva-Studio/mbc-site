"use client";

import { useState } from "react";

const FORM_ID = "8242509";

const KitForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Removed ConvertKit script loading since we're handling submission manually
  // The script was causing conflicts with React's DOM management

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);

    try {
      // Use URLSearchParams instead of FormData for better compatibility
      const formData = new URLSearchParams();
      formData.append("email_address", email);
      formData.append("form", FORM_ID);

      const response = await fetch(`https://app.kit.com/forms/${FORM_ID}/subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (response.ok) {
        setEmail("");
        // Show success message - you could replace this with a toast or modal
        alert("Success! Now check your email to confirm your subscription. P.S. It might be in your spam folder.");
      } else {
        const errorText = await response.text();
        console.error("Form submission error:", errorText);
        setErrors(["Something went wrong. Please try again."]);
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrors(["Network error. Please try again."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="kitform"
      className="py-16 bg-primary-50 text-white p-4 rounded-2xl"
      style={{ backgroundColor: 'var(--color-orange)' }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 
          className="text-3xl font-bold font-sans text-primary-900 mb-6"
          style={{ fontFamily: "'Fugaz One', cursive" }}
        >
          Join and Get the First 2 Chapters
        </h2>
        <p className="text-lg text-primary-700 max-w-2xl mx-auto mb-8 font-sans">
          Enter your email to get the first 2 chapters completely free.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {errors.length > 0 && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="
                flex-grow
                px-4
                py-3
                rounded-md
                border
                border-primary-300
                focus:outline-none
                focus:ring-2
                focus:ring-primary-500
              "
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="
                bg-primary-700
                hover:bg-primary-800
                text-white
                font-medium
                py-3
                px-6
                rounded-md
                shadow-md
                transition-colors
                disabled:opacity-50"
              style={{ backgroundColor: 'var(--color-orange)' }}
            >
              {isSubmitting ? 'Submitting...' : 'Download'}
            </button>
          </div>
          
          <p className="text-sm text-primary-700 mt-4">
            We won't send you spam. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default KitForm;
