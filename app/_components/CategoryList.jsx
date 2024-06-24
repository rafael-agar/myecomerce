import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CategoryList({categoryList}) {
  return (
    <section className='mt-5'>
        <h2 className="text-primary font-bold text-2xl mt-10 mb-5 text-center">Compre por Categorías</h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'>
            {/* PENDIENTE VALIDDAAARRRRRRRRRRRRRRR */}
            {categoryList.map((category, index) => (
                // CAMBIAR COLOR
                <Link href={`/categoria/${category.attributes.name}`} className='flex flex-col justify-center items-center bg-degradado gap-2 p-2 rounded-lg group cursor-pointer hover:bg-blue-100' key={index}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}${category.attributes.icon.data[0].attributes.url}`}
                        alt='image' 
                        className='group-hover:scale-125 transition-all ease-in-out' 
                        width={50}
                        height={50}
                    />
                    <h3 className='text-primary font-bold'>{category.attributes.name}</h3>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default CategoryList