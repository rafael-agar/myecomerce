'use client';

import React, { useState, useEffect, useRef } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import ProductItem from './ProductItem';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const ProductsByCategory = ({ category, categoryName }) => {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsByCategory = await GlobalApi.getProductsByCategory(category);
      setProducts(productsByCategory);
    };

    fetchProducts();
  }, [category]);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = direction === 'left' ? -carousel.offsetWidth : carousel.offsetWidth;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className='relative'>
      <h2 className="text-primary font-bold text-2xl text-center border-t-2 border-gray-100 pt-10 underline">
        {categoryName ? categoryName : category}
      </h2>
      <div className="overflow-x-scroll flex mt-10 scroll-smooth focus:scroll-auto scrollbar-none" ref={carouselRef}>
        {products.map((product, index) => (
          <div className="flex-none w-64 h-96 px-2 py-4" key={index}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r-lg"
          onClick={() => handleScroll('left')}
        >
          <ChevronLeftIcon size={24} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l-lg"
          onClick={() => handleScroll('right')}
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>
    </section>
  );
};

export default ProductsByCategory;
