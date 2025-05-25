import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Alpine Vision Pro Goggles',
    category: 'Goggles',
    price: 149.99,
    image: 'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1973293/pexels-photo-1973293.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3522265/pexels-photo-3522265.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Experience crystal clear vision in all weather conditions with our premium Alpine Vision Pro Goggles. Anti-fog technology and UV protection keep your vision clear while the comfortable foam padding ensures all-day wearability.',
    features: [
      'Ultra-wide panoramic lens',
      'Anti-fog coating',
      'UV400 protection',
      'Helmet compatible',
      'Adjustable strap',
      'Interchangeable lens system'
    ],
    rating: 4.8,
    reviewCount: 124,
    stock: 45,
    isNew: true,
    isFeatured: true,
    colors: ['Black', 'Blue', 'Red'],
    sizes: ['Standard']
  },
  {
    id: '2',
    name: 'ThermaGrip Pro Gloves',
    category: 'Gloves',
    price: 79.99,
    discountPrice: 59.99,
    image: 'https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4217/winter-cold-snow-gloves.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Keep your hands warm and dry with our ThermaGrip Pro Gloves. Featuring advanced insulation and waterproof exterior, these gloves provide maximum warmth without sacrificing dexterity. Touchscreen compatible fingertips let you use your devices without exposing your hands to the cold.',
    features: [
      'Waterproof outer shell',
      'Thinsulate insulation',
      'Touchscreen compatible',
      'Reinforced palm grip',
      'Adjustable wrist strap',
      'Moisture-wicking lining'
    ],
    rating: 4.6,
    reviewCount: 98,
    stock: 35,
    isOnSale: true,
    isFeatured: true,
    colors: ['Black', 'Navy', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Avalanche Defender Helmet',
    category: 'Helmets',
    price: 199.99,
    image: 'https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/35867/helmet-bike-helmet-motorcyclist-helm.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Safety meets style with our Avalanche Defender Helmet. Featuring MIPS protection system and adjustable ventilation, this helmet provides superior protection for all your mountain adventures. The lightweight design ensures comfort during all-day wear.',
    features: [
      'MIPS protection system',
      'Adjustable ventilation',
      'Audio-compatible ear pads',
      'Fidlock magnetic buckle',
      'Removable, washable liner',
      'Integrated goggle clip'
    ],
    rating: 4.9,
    reviewCount: 87,
    stock: 20,
    isNew: true,
    colors: ['White', 'Black', 'Blue'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: '4',
    name: 'PeakPerformance Backpack',
    category: 'Accessories',
    subCategory: 'Backpacks',
    price: 129.99,
    discountPrice: 99.99,
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Carry all your essentials with our PeakPerformance Backpack. Designed specifically for winter sports enthusiasts, this backpack features a dedicated avalanche safety pocket, insulated hydration sleeve, and multiple compartments for organized storage.',
    features: [
      'Waterproof material',
      'Avalanche safety pocket',
      'Insulated hydration sleeve',
      'Padded laptop compartment',
      'External helmet carrier',
      'Ergonomic shoulder straps'
    ],
    rating: 4.7,
    reviewCount: 56,
    stock: 30,
    isOnSale: true,
    colors: ['Black', 'Blue', 'Orange'],
    sizes: ['Standard']
  },
  {
    id: '5',
    name: 'Arctic Thermal Base Layer',
    category: 'Apparel',
    subCategory: 'Base Layers',
    price: 89.99,
    image: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311472/pexels-photo-6311472.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stay warm from the inside out with our Arctic Thermal Base Layer. Made with moisture-wicking fabric and four-way stretch, this base layer provides exceptional warmth without bulk. Perfect for long days on the mountain.',
    features: [
      'Moisture-wicking technology',
      'Four-way stretch fabric',
      'Antimicrobial treatment',
      'Flatlock seams',
      'Thumbholes',
      'Zippered neck for ventilation'
    ],
    rating: 4.5,
    reviewCount: 74,
    stock: 25,
    isFeatured: true,
    colors: ['Black', 'Navy', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '6',
    name: 'Summit Pole Set',
    category: 'Equipment',
    subCategory: 'Ski Poles',
    price: 119.99,
    image: 'https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/209756/pexels-photo-209756.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Tackle any terrain with confidence using our Summit Pole Set. Constructed from lightweight, durable aluminum with ergonomic grips, these poles provide reliable support for all your skiing adventures. The adjustable straps ensure a secure hold in any conditions.',
    features: [
      'Lightweight aluminum construction',
      'Ergonomic grip design',
      'Adjustable straps',
      'Powder baskets included',
      'Collapsible for easy transport',
      'All-terrain performance'
    ],
    rating: 4.4,
    reviewCount: 42,
    stock: 15,
    colors: ['Black', 'Silver', 'Blue'],
    sizes: ['110cm', '115cm', '120cm', '125cm', '130cm']
  },
  {
    id: '7',
    name: 'PowderGuard Balaclava',
    category: 'Accessories',
    subCategory: 'Face Protection',
    price: 39.99,
    image: 'https://images.pexels.com/photos/1438446/pexels-photo-1438446.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1438446/pexels-photo-1438446.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/713003/pexels-photo-713003.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Protect your face from harsh elements with our PowderGuard Balaclava. Made with breathable, moisture-wicking fabric, this balaclava provides essential coverage without causing overheating. The hinged design allows for easy adjustment depending on conditions.',
    features: [
      'Breathable fabric',
      'Moisture-wicking technology',
      'Hinged design for versatility',
      'Flatlock seams for comfort',
      'Mesh breathing panel',
      'UPF 50+ sun protection'
    ],
    rating: 4.3,
    reviewCount: 38,
    stock: 50,
    isNew: true,
    colors: ['Black', 'Navy', 'Gray'],
    sizes: ['Standard']
  },
  {
    id: '8',
    name: 'FreezeLock Boot Heaters',
    category: 'Accessories',
    subCategory: 'Boot Accessories',
    price: 149.99,
    discountPrice: 129.99,
    image: 'https://images.pexels.com/photos/2433363/pexels-photo-2433363.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2433363/pexels-photo-2433363.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Say goodbye to cold feet with our FreezeLock Boot Heaters. These rechargeable heating elements provide up to 8 hours of warmth for those long, cold days on the mountain. The wireless remote control allows for easy temperature adjustment without removing your gloves.',
    features: [
      'Rechargeable battery',
      'Up to 8 hours of heat',
      'Wireless remote control',
      'Three temperature settings',
      'Custom-fit insoles',
      'Water-resistant design'
    ],
    rating: 4.6,
    reviewCount: 29,
    stock: 10,
    isOnSale: true,
    colors: ['Black'],
    sizes: ['S', 'M', 'L']
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);
export const newProducts = products.filter(product => product.isNew);
export const saleProducts = products.filter(product => product.isOnSale);

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (id: string, limit = 4): Product[] => {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== id && p.category === product.category)
    .slice(0, limit);
};