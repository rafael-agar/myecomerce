import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList, categoryName}) {
  return (
    <section className=''>
        <h2 className="text-primary font-bold text-2xl text-center border-t-2 border-gray-100 pt-10 underline">
          {categoryName ? categoryName : 'Productos más populares'}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
            {productList.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))}
        </div>
    </section>
  )
}

export default ProductList