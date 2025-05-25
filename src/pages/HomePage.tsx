import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import ShopTheLook from '../components/home/ShopTheLook';
import Testimonials from '../components/home/Testimonials';
import FeaturedBlog from '../components/home/FeaturedBlog';
import Newsletter from '../components/ui/Newsletter';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <ShopTheLook />
      <Testimonials />
      <FeaturedBlog />
      <Newsletter />
    </>
  );
};

export default HomePage;