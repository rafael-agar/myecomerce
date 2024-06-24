import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import Image from "next/image";
import Footer from "./_components/Footer";
import Promos from "./_components/Promos";

export default async function Home() {

  const sliderList = await GlobalApi.getSliders();
  
  const categoryList = await GlobalApi.getCategoryList();

  const productList = await GlobalApi.getAllProducts();

  const promoList = await GlobalApi.getPromo();

  return (
    <>
      <main className="p-5 md:p-15 px-16">
        {/* Slider */}
        <Slider sliderList={sliderList} />
        {/* Category List */}
        <CategoryList categoryList={categoryList} />
        {/* PROMOS */}
        <Promos promoList={promoList} />
        {/* productos */}
        <ProductList productList={productList} />
      </main>
      {/* BANNER */}
      <div className="w-full sm:h-[400] mt-10 flex justify-center">
        <Image src="/DELIVERY-multimax.jpg" alt="banner" width={1800} height={400} />
      </div>
      {/* SPECIFIC CATEGORY */}
      {/* PROMOS */}
      <Promos promoList={promoList} />
      <div className="p-5 md:p-15 px-16">
        <ProductList productList={productList} />
      </div>

      <Footer className="p-5 md:p-15 px-16" />
    </>
  );
}
 