import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/shop/${category.slug}`} 
      className="relative overflow-hidden group rounded-lg h-60 block shadow-md card-hover"
    >
      <img 
        src={category.image} 
        alt={category.name} 
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-800 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
        <p className="text-gray-200 text-sm mb-3">{category.description}</p>
        <span className="inline-block text-sm font-medium text-orange-500 group-hover:translate-x-2 transition-transform duration-300">
          Shop Now
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;