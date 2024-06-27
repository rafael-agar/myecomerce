import GlobalApi from '@/app/_utils/GlobalApi'
import React from 'react'
import TopCategoryList from '../_components/TopCategoryList';
import ProductList from '@/app/_components/ProductList';
import Posts from '@/app/_components/Posts';

export const metadata = {
  title: "MultimaxStore",
  description: "!!!",
};

async function categoria({params}) {

  const productList = await GlobalApi.getProductsByCategory(params.nombreCategoria)
  const categoryList = await GlobalApi.getCategoryList();
  const promoList = await GlobalApi.getPromo();
  const categoryName = params.nombreCategoria

  return (
    <div>
      <h1 className='p-4 bg-primary text-white font-bold text-center'>{params.nombreCategoria}</h1>
      <TopCategoryList className="pt-10" categoryList={categoryList} 
        selectedCategory = {params.nombreCategoria}
      />

      <section className="bg-white">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                        <img src="https://intuitive-deer-70ddaad1ab.media.strapiapp.com/w4_a59897b4cb.webp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Split</h3>
                    </a>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                        <img src="https://intuitive-deer-70ddaad1ab.media.strapiapp.com/w5_f19a5921ad.webp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">18.000 BTU</h3>
                    </a>
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                            <img src="https://intuitive-deer-70ddaad1ab.media.strapiapp.com/w2_4e19a1bd1f.webp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Parrilleras</h3>
                        </a>
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                            <img src="https://intuitive-deer-70ddaad1ab.media.strapiapp.com/walmart1_2df8f45376.webp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">TV</h3>
                        </a>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                        <img src="https://intuitive-deer-70ddaad1ab.media.strapiapp.com/w3_06c181858a.webp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Brandy</h3>
                    </a>
                </div>
            </div>
        </div>
      </section>


      <div className='p-5 md:p-10 px-16 border-b-2 border-gray-100 pb-10'>
        <ProductList productList={productList} categoryName={categoryName} />
      </div>



      <Posts />


      </div>

  )
}

export default categoria