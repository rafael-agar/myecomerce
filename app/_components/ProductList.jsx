import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <section className='mt-10'>
        <h2 className="text-primary font-bold text-2xl text-center">Productos más populares</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
            {productList.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))}
        </div>
    </section>
  )
}

export default ProductList