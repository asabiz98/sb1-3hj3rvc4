import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { featuredProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  return (
    <section id="featured-products" className="section-padding bg-snow">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Featured Gear</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular products, hand-selected for their exceptional quality and performance on the mountain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;