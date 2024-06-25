// app/_components/ProductsByCategory.jsx
'use client';

import React, { useState, useEffect } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import ProductList from './ProductList';
import ProductItem from './ProductItem'

const ProductsByCategory = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsByCategory = await GlobalApi.getProductsByCategory(category);
      setProducts(productsByCategory);
    };

    fetchProducts();
  }, [category]);

  return (
    <section className=''>
        <h2 className="text-primary font-bold text-2xl text-center border-t-2 border-gray-100 pt-10 underline">
          {category}
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-10'>
            {products.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))}
        </div>
    </section>
  );
};

export default ProductsByCategory;
