// app/_components/ProductsByCategory.jsx
'use client';

import React, { useState, useEffect } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import ProductListByCategory from './ProductList';

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
    <div>
      {/* <h2 className="text-primary font-bold text-2xl text-center mb-5">
        Productos de {category}
      </h2> */}
      <ProductListByCategory productList={products} />
    </div>
  );
};

export default ProductsByCategory;
