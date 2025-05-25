import React from 'react';
import { Review } from '../../types';

interface TestimonialCardProps {
  review: Review;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {/* Star Rating */}
        <div className="flex mr-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < review.rating ? 'text-orange-500' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        {review.verified && (
          <span className="bg-success-100 text-success-700 text-xs px-2 py-1 rounded">Verified Purchase</span>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-2">{review.title}</h3>
      <p className="text-gray-600 mb-4">{review.comment}</p>

      <div className="flex items-center">
        {review.user.avatar ? (
          <img 
            src={review.user.avatar} 
            alt={review.user.name} 
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-navy-800 text-white flex items-center justify-center font-medium">
            {review.user.name.charAt(0)}
          </div>
        )}
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-800">{review.user.name}</p>
          <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;