import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostCard from '../ui/BlogPostCard';
import { blogPosts } from '../../data/blog';

const FeaturedBlog: React.FC = () => {
  return (
    <section className="section-padding bg-snow">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Mountain Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, techniques, and destination guides to enhance your winter sports experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn-outline">
            Read More Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;