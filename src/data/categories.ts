import { Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Goggles',
    image: 'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium goggles for clear vision in all conditions',
    slug: 'goggles'
  },
  {
    id: '2',
    name: 'Gloves',
    image: 'https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Insulated, waterproof gloves for maximum protection',
    slug: 'gloves'
  },
  {
    id: '3',
    name: 'Helmets',
    image: 'https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Safety-certified helmets with style and comfort',
    slug: 'helmets'
  },
  {
    id: '4',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Essential accessories for your mountain adventures',
    slug: 'accessories'
  },
  {
    id: '5',
    name: 'Apparel',
    image: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Performance apparel for all mountain conditions',
    slug: 'apparel'
  },
  {
    id: '6',
    name: 'Equipment',
    image: 'https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-quality equipment for skiing and snowboarding',
    slug: 'equipment'
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};