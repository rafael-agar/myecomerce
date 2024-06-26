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
                        <img src="https://i5.walmartimages.com/asr/a13aa9eb-82d7-41b3-8bb4-80778bed60c1.63a3d925191c3ba49c7514cbf87f8b36.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Split</h3>
                    </a>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                        <img src="https://i5.walmartimages.com/asr/c3baabbc-bbfb-4361-9853-f87c5f5fdb6a.02e50e7271da39e8ab5690c5bac2389b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">18.000 BTU</h3>
                    </a>
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                            <img src="https://i5.walmartimages.com/asr/63276cab-e3a7-45da-a483-f8a0f032a2d6.ccb27632317fd501235032d47ee95809.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Parrilleras</h3>
                        </a>
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                            <img src="https://i5.walmartimages.com/asr/7524cd62-c76d-4ecf-9ed1-fcbdb3e5a6ab.b6e616a5f33ef7d09ba1a128c496f68a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">TV</h3>
                        </a>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                        <img src="https://i5.walmartimages.com/seo/Portable-Air-Conditioner-Cooling-Fan-Evaporative-Cooler-Room-3-Speed-7-LED-Light-2-Cool-Spray-3-in-1-Personal-Conditioners-Travel-Office-White_3c9ec411-5942-4f46-87b8-1ea07b01deb3.a79a327caf4844b1c2250505c4c93f17.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
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