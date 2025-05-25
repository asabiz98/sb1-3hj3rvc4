export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  price: number;
  discountPrice?: number;
  image: string;
  images?: string[];
  description: string;
  features?: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  slug: string;
}

export interface Review {
  id: string;
  productId: string;
  user: {
    name: string;
    avatar?: string;
  };
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  color?: string;
  size?: string;
}

export type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
};