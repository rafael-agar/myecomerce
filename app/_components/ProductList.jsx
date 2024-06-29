'use client'
import React, { useRef } from 'react'
import ProductItem from './ProductItem'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

function ProductList({ productList, categoryName }) {
  const carouselRef = useRef(null)

  const handleScroll = (direction) => {
    const carousel = carouselRef.current
    const scrollAmount = carousel.offsetWidth / 2

    if (direction === 'left') {
      carousel.scrollLeft -= scrollAmount
    } else {
      carousel.scrollLeft += scrollAmount
    }
  }

  return (
    <section className='relative'>
      <h2 className="text-primary font-bold text-2xl text-center border-t-2 border-gray-100 pt-10 underline">
        {categoryName ? categoryName : 'Productos más populares'}
      </h2>
      <div className="overflow-x-scroll flex mt-10 scroll-smooth focus:scroll-auto scrollbar-none" ref={carouselRef}>
        {productList.map((product, index) => (
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
  )
}

export default ProductList
