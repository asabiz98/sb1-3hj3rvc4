import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

interface BundleProps {
  title: string;
  image: string;
  description: string;
  price: number;
  discount?: number;
  link: string;
  products: string[];
}

const FeaturedBundle: React.FC<BundleProps> = ({
  title,
  image,
  description,
  price,
  discount,
  link,
  products
}) => {
  const discountedPrice = discount ? price - (price * discount / 100) : price;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={image}
          alt={title}
          className="w-full h-64 object-cover object-center"
        />
        {discount && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            Save {discount}%
          </div>
        )}
        <div className="absolute top-3 left-3 bg-navy-800 text-white text-xs font-bold uppercase px-2 py-1 rounded flex items-center">
          <Package size={14} className="mr-1" /> Bundle
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <p className="font-medium text-sm text-gray-700 mb-2">Includes:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {products.map((product, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                {product}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          {discount ? (
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">${discountedPrice.toFixed(2)}</span>
              <span className="text-gray-500 line-through ml-2">${price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-2xl font-bold text-gray-800">${price.toFixed(2)}</span>
          )}
        </div>
        
        <Link 
          to={link} 
          className="btn-primary w-full text-center"
        >
          Shop the Bundle
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBundle;