import React from 'react';
import FeaturedBundle from '../ui/FeaturedBundle';

const bundles = [
  {
    id: '1',
    title: 'Weekend Warrior Bundle',
    image: 'https://images.pexels.com/photos/1271147/pexels-photo-1271147.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Everything you need for a weekend on the slopes. Perfect for intermediate riders.',
    price: 399.99,
    discount: 15,
    link: '/bundles/weekend-warrior',
    products: [
      'Alpine Vision Pro Goggles',
      'ThermaGrip Pro Gloves',
      'PowderGuard Balaclava',
      'Arctic Thermal Base Layer'
    ]
  },
  {
    id: '2',
    title: 'Pro Performance Pack',
    image: 'https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional-grade gear for serious mountain enthusiasts who demand the best.',
    price: 649.99,
    discount: 10,
    link: '/bundles/pro-performance',
    products: [
      'Avalanche Defender Helmet',
      'Alpine Vision Pro Goggles',
      'ThermaGrip Pro Gloves',
      'FreezeLock Boot Heaters',
      'PeakPerformance Backpack'
    ]
  },
  {
    id: '3',
    title: 'Essential Starter Kit',
    image: 'https://images.pexels.com/photos/38242/pexels-photo-38242.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The perfect starter kit for beginners looking to get into winter sports.',
    price: 249.99,
    link: '/bundles/essential-starter',
    products: [
      'Alpine Vision Pro Goggles',
      'ThermaGrip Pro Gloves',
      'PowderGuard Balaclava'
    ]
  }
];

const ShopTheLook: React.FC = () => {
  return (
    <section className="section-padding bg-ice-blue">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Shop the Look</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete gear sets curated for different skill levels and riding styles. 
            Save when you buy together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <FeaturedBundle 
              key={bundle.id}
              title={bundle.title}
              image={bundle.image}
              description={bundle.description}
              price={bundle.price}
              discount={bundle.discount}
              link={bundle.link}
              products={bundle.products}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopTheLook;