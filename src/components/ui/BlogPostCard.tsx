import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-navy-800 text-white text-xs px-2 py-1 rounded">
            {post.category}
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <Calendar size={14} className="mr-1" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {post.author.avatar ? (
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover mr-2"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-navy-800 text-white flex items-center justify-center text-sm font-medium mr-2">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <span className="text-sm text-gray-700">{post.author.name}</span>
            </div>
            <span className="text-orange-500 font-medium text-sm">Read More</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;