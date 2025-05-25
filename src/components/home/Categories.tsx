import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../ui/CategoryCard';
import { categories } from '../../data/categories';

const Categories: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need for your next mountain adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            Browse All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;