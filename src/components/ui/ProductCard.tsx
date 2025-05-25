import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
    
    // Show a toast notification
    const message = `${product.name} added to cart!`;
    alert(message); // Replace with a proper toast notification in a real app
  };

  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Sale/New Badge */}
          {product.isOnSale && (
            <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">
              Sale
            </div>
          )}
          {product.isNew && !product.isOnSale && (
            <div className="absolute top-3 left-3 bg-navy-800 text-white text-xs font-bold uppercase px-2 py-1 rounded">
              New
            </div>
          )}

          {/* Quick actions */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between">
            <button 
              onClick={handleAddToCart}
              className="text-white hover:text-orange-500 transition-colors flex items-center text-sm"
              aria-label="Add to cart"
            >
              <ShoppingCart size={16} className="mr-1" /> Add to Cart
            </button>
            <button 
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={16} />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
          <div className="flex items-center mb-2">
            {/* Star Rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-orange-500' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-lg font-bold text-orange-500">${product.discountPrice.toFixed(2)}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;