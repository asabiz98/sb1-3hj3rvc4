import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit this to your newsletter service
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-ice-blue py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Join the FrostPeak Community</h2>
          <p className="text-gray-700 mb-8">
            Subscribe to our newsletter for exclusive deals, mountain tips, and new product alerts. 
            <span className="font-medium block mt-2">Plus, get 10% off your first order!</span>
          </p>

          {isSubmitted ? (
            <div className="bg-success-100 text-success-700 p-4 rounded-lg">
              <p className="font-medium">Thanks for subscribing!</p>
              <p className="text-sm mt-1">Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-navy-800 text-gray-800 border-0"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-r-md transition-colors mt-3 sm:mt-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;