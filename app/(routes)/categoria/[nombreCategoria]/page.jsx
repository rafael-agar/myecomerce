import GlobalApi from '@/app/_utils/GlobalApi'
import React from 'react'
import TopCategoryList from '../_components/TopCategoryList';
import ProductList from '@/app/_components/ProductList';

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

      <div className='p-5 md:p-10 px-16 border-b-2 border-gray-100 pb-10'>
        <ProductList productList={productList} categoryName={categoryName} />
      </div>

      <div className="container mx-auto py-2 lg:px-10 lg:pt-10 mb-20">
        <div className="hidden md:block">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                {promoList.length > 0 && (
                  <img
                    alt={promoList[0].attributes.name}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={`http://localhost:1337${promoList[0].attributes.image.data[0].attributes.url}`}
                  />
                )}
              </div>
              <div className="w-1/2 p-1 md:p-2">
                {promoList.length > 1 && (
                  <img
                    alt={promoList[1].attributes.name}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={`http://localhost:1337${promoList[1].attributes.image.data[0].attributes.url}`}
                  />
                )}
              </div>
              <div className="w-full p-1 md:p-2">
                {promoList.length > 2 && (
                  <img
                    alt={promoList[2].attributes.name}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={`http://localhost:1337${promoList[2].attributes.image.data[0].attributes.url}`}
                  />
                )}
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                {promoList.length > 3 && (
                  <img
                    alt={promoList[3].attributes.name}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={`http://localhost:1337${promoList[3].attributes.image.data[0].attributes.url}`}
                  />
                )}
              </div>
              <div className="w-1/2 p-1 md:p-2">
                {promoList.length > 4 && (
                  <img
                    alt={promoList[4].attributes.name}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={`http://localhost:1337${promoList[4].attributes.image.data[0].attributes.url}`}
                  />
                )}
              </div>
              <div className="w-1/2 p-1 md:p-2">
                {promoList.length > 5 && (
                  <img
                    alt={promoList[5].attributes.name}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={`http://localhost:1337${promoList[5].attributes.image.data[0].attributes.url}`}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {promoList.map((promo, index) => (
            <div key={index} className="flex flex-wrap">
              <div className="w-full p-1">
                <img
                  alt={promo.attributes.name}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={`http://localhost:1337${promo.attributes.image.data[0].attributes.url}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>

  )
}

export default categoria