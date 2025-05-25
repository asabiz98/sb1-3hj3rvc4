import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="container-custom">
        <div className="max-w-2xl">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Ride the Storm.<br />Own the Mountain.
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Premium skiing and snowboarding gear for adrenaline seekers who demand the best. Engineered for performance in extreme conditions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/shop" className="btn-primary">
                Shop the Slopes
              </Link>
              <Link to="/bundles" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">
                Explore Bundles
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#featured-products" 
          className="text-white flex flex-col items-center"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-1">Scroll</span>
          <ChevronRight size={20} className="transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;