import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CategoryList({categoryList}) {
  return (
    <section className='mt-5 '>
        <h2 className="text-primary font-bold text-2xl mt-10 mb-5 text-center">Compre por Categorías</h2>
        <div className='flex sm:flex-wrap gap-1 mt-5 justify-center overflow-auto md:mx-20 border-b-2 border-gray-100 pb-5'>
            {/* PENDIENTE VALIDDAAARRRRRRRRRRRRRRR */}
            {categoryList.map((category, index) => (
                // CAMBIAR COLOR
                <Link href={`/categoria/${category.attributes.name}`} className='flex flex-col justify-center items-center bg-degradado gap-2 p-2 rounded-lg group cursor-pointer hover:bg-blue-100 w-[150px] min-w-[100px]' key={index}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}${category.attributes.icon.data[0].attributes.url}`}
                        alt='image' 
                        className='group-hover:scale-125 transition-all ease-in-out' 
                        width={50}
                        height={50}
                    />
                    <p className='text-primary font-bold text-sm'>{category.attributes.name}</p>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default CategoryList
