import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    user: {
      name: 'Alex Thompson',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    rating: 5,
    title: 'Best goggles I have ever owned',
    comment: 'These goggles are incredible! Crystal clear vision even in heavy snowfall, and they do not fog up at all. The fit is perfect with my helmet, and the quick-change lens system is a game-changer when conditions shift throughout the day.',
    date: '2024-11-15',
    verified: true
  },
  {
    id: '2',
    productId: '1',
    user: {
      name: 'Sophia Martinez'
    },
    rating: 4,
    title: 'Great vision, slight fit issue',
    comment: 'The lens quality is outstanding - no fogging and excellent visibility in different light conditions. My only complaint is that they press a bit on my nose after a full day of riding. Still, I would recommend them for the optical quality alone.',
    date: '2024-11-10',
    verified: true
  },
  {
    id: '3',
    productId: '1',
    user: {
      name: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    rating: 5,
    title: 'Peripheral vision is amazing',
    comment: 'The wide field of view on these goggles is incredible. I can see everything in my peripheral vision which makes navigating through trees much safer. The anti-fog coating works like a charm, and they are comfortable for all-day wear.',
    date: '2024-11-05',
    verified: true
  },
  {
    id: '4',
    productId: '2',
    user: {
      name: 'Emma Davis'
    },
    rating: 5,
    title: 'Warm and dexterous',
    comment: 'These gloves are the perfect balance of warmth and dexterity. I can operate my phone and adjust my bindings without taking them off. They stayed dry during wet conditions and kept my hands toasty in below zero temperatures.',
    date: '2024-11-12',
    verified: true
  },
  {
    id: '5',
    productId: '2',
    user: {
      name: 'Michael Brown',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    rating: 4,
    title: 'Great gloves, wish they had wrist leashes',
    comment: 'These gloves have kept my hands warm and dry in some challenging conditions. The touchscreen compatibility works well even in cold temps. My only wish is that they came with wrist leashes so I would not worry about dropping them on the lift.',
    date: '2024-11-08',
    verified: true
  }
];

export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId);
};