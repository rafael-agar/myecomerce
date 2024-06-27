import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function TopCategoryList({categoryList, selectedCategory}) {
    
  return (
    <div className='flex gap-1 mt-5 justify-center overflow-auto md:mx-10 overflow-x-hidde'>
    {/* PENDIENTE VALIDDAAARRRRRRRRRRRRRRR */}
    {categoryList.map((category, index) => (
        // CAMBIAR COLOR
        <Link href={`/categoria/${category.attributes.name}`} 
            key={index}
            className={`${selectedCategory===category.attributes.name 
                ? 'flex flex-col justify-center items-center bg-primary gap-2 p-2 rounded-lg group text-white cursor-pointer hover:bg-blue-100 w-[150px] min-w-[100px]' 
                : 'flex flex-col justify-center items-center bg-degradado gap-2 p-2 rounded-lg group cursor-pointer hover:bg-blue-100 w-[150px] min-w-[100px]'}
            `}>
            <Image src={category.attributes.icon.data[0].attributes.url}
                alt='image' 
                className='group-hover:scale-125 transition-all ease-in-out' 
                width={50}
                height={50}
            />
            <h3 className={`${selectedCategory===category.attributes.name ? 'text-white font-bold text-sm' : 'text-sm text-primary font-bold'}`}>{category.attributes.name}</h3>
        </Link>
        ))}
    </div>
  )
}

export default TopCategoryList