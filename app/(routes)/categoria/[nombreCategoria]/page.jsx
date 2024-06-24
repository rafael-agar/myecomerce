import GlobalApi from '@/app/_utils/GlobalApi'
import React from 'react'
import TopCategoryList from '../_components/TopCategoryList';
import ProductList from '@/app/_components/ProductList';

async function categoria({params}) {

  const productList = await GlobalApi.getProductsByCategory(params.nombreCategoria)
  const categoryList = await GlobalApi.getCategoryList();

  return (
    <div>
      <h1 className='p-4 bg-primary text-white font-bold text-center'>{params.nombreCategoria}</h1>
      <TopCategoryList categoryList={categoryList} 
        selectedCategory = {params.nombreCategoria}
      />
      <div className='p-5 md:p-10 px-16'>
        <ProductList productList={productList} />
      </div>

    </div>
  )
}

export default categoria