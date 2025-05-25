import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential Tips for Maintaining Your Ski Gear',
    slug: 'essential-tips-maintaining-ski-gear',
    excerpt: 'Keep your ski equipment in top condition with these expert maintenance tips that will extend the life of your gear and improve performance on the slopes.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    coverImage: 'https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-11-15',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    category: 'Maintenance',
    tags: ['Ski Gear', 'Maintenance', 'Winter Care', 'Equipment']
  },
  {
    id: '2',
    title: 'Top 5 Snowboarding Destinations for 2025',
    slug: 'top-snowboarding-destinations-2025',
    excerpt: 'Discover the most exciting snowboarding destinations for the upcoming winter season, from undiscovered gems to reimagined classics.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    coverImage: 'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-11-10',
    author: {
      name: 'Jake Williams',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    category: 'Destinations',
    tags: ['Snowboarding', 'Travel', 'Resorts', 'Winter 2025']
  },
  {
    id: '3',
    title: 'How to Choose the Perfect Ski Goggles',
    slug: 'choose-perfect-ski-goggles',
    excerpt: 'A comprehensive guide to selecting ski goggles that match your needs, face shape, and the conditions you will encounter on the mountain.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    coverImage: 'https://images.pexels.com/photos/1973293/pexels-photo-1973293.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-11-05',
    author: {
      name: 'Alex Morgan',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    category: 'Gear Guide',
    tags: ['Goggles', 'Buying Guide', 'Vision', 'Equipment']
  },
  {
    id: '4',
    title: 'Beginner Snowboarder? Avoid These 7 Common Mistakes',
    slug: 'beginner-snowboarder-common-mistakes',
    excerpt: 'New to snowboarding? Learn how to avoid the most common mistakes that beginners make and fast-track your progression on the mountain.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    coverImage: 'https://images.pexels.com/photos/1271147/pexels-photo-1271147.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-10-28',
    author: {
      name: 'Chris Martinez',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    category: 'Techniques',
    tags: ['Beginners', 'Snowboarding', 'Tips', 'Learning']
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};