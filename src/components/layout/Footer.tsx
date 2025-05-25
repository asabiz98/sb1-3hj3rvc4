import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FrostPeak<span className="text-orange-500">Gear</span></h3>
            <p className="text-gray-300 mb-4">
              Premium winter sports accessories for skiing and snowboarding enthusiasts. Quality gear for every mountain adventure.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-orange-500 transition-colors">Shop All</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-orange-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-orange-500 transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Shop Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/goggles" className="text-gray-300 hover:text-orange-500 transition-colors">Goggles</Link>
              </li>
              <li>
                <Link to="/shop/gloves" className="text-gray-300 hover:text-orange-500 transition-colors">Gloves</Link>
              </li>
              <li>
                <Link to="/shop/helmets" className="text-gray-300 hover:text-orange-500 transition-colors">Helmets</Link>
              </li>
              <li>
                <Link to="/shop/accessories" className="text-gray-300 hover:text-orange-500 transition-colors">Accessories</Link>
              </li>
              <li>
                <Link to="/shop/apparel" className="text-gray-300 hover:text-orange-500 transition-colors">Apparel</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Powder Lane, Alpine Heights, CO 80425</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@frostpeakgear.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Join Our Newsletter</h4>
              <form className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-l-md px-4 py-2 bg-gray-700 text-white border-0 focus:outline-none focus:ring-1 focus:ring-orange-500 w-full sm:w-auto"
                  aria-label="Email address"
                />
                <button 
                  type="submit" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-r-md mt-2 sm:mt-0 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-2">Get 10% off your first order when you sign up!</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FrostPeak Gear. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/shipping" className="text-gray-400 hover:text-white text-sm">Shipping Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;