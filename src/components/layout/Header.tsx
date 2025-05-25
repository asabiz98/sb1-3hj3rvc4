import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, ChevronDown, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { categories } from '../../data/categories';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy-800 shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom">
        {/* Promo bar */}
        <div className="hidden md:block text-center text-sm bg-orange-500 text-white py-1 px-4 rounded-full mb-2 w-fit mx-auto">
          Free Shipping on Orders $99+ | Winter Sale: Up to 40% Off
        </div>
        
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-white font-montserrat text-2xl font-bold">FrostPeak<span className="text-orange-500">Gear</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link font-medium">Home</Link>
            <div className="relative group">
              <button className="nav-link font-medium flex items-center">
                Shop <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/shop/${category.slug}`} 
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-ice-blue hover:text-navy-800"
                    >
                      {category.name}
                    </Link>
                  ))}
                  <Link to="/shop" className="block px-4 py-2 text-sm font-medium text-navy-800 hover:bg-ice-blue">
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="nav-link font-medium">About</Link>
            <Link to="/blog" className="nav-link font-medium">Blog</Link>
            <Link to="/contact" className="nav-link font-medium">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link to="/account" className="text-white hover:text-orange-500 transition-colors hidden md:block">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-white hover:text-orange-500 transition-colors relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden text-white hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`bg-white py-3 shadow-md transition-all duration-300 ${
        searchOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0 py-0'
      }`}>
        <div className="container-custom">
          <form className="flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="input-field py-2"
              aria-label="Search"
            />
            <button 
              type="submit" 
              className="ml-2 bg-navy-800 hover:bg-navy-900 text-white p-2 rounded-md"
              aria-label="Submit search"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[60px] left-0 w-full h-screen bg-navy-800 z-40 transition-all duration-300 md:hidden ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="container-custom py-8">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-orange-500 text-lg font-medium py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2 border-b border-gray-700">
              <span className="text-white text-lg font-medium">Shop</span>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                {categories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/shop/${category.slug}`} 
                    className="text-gray-300 hover:text-orange-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link 
                  to="/shop" 
                  className="text-gray-300 hover:text-orange-500 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View All Products
                </Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className="text-white hover:text-orange-500 text-lg font-medium py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="text-white hover:text-orange-500 text-lg font-medium py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-orange-500 text-lg font-medium py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/account" 
              className="text-white hover:text-orange-500 text-lg font-medium py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Account
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;