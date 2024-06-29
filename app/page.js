import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import Image from "next/image";
import Promos from "./_components/Promos";
import ProductListbyCategory from "./_components/ProductListbyCategory";
import Posts from "./_components/Posts";
import ChatbotScript from "./_components/ChatbotScript";

export const metadata = {
  title: "MultimaxStore",
  description: "!!!",
};

export default async function Home({params}) {

  const sliderList = await GlobalApi.getSliders();
  
  const categoryList = await GlobalApi.getCategoryList();

  const productList = await GlobalApi.getAllProducts();

  const promoList = await GlobalApi.getPromo();

  return (
    <>
      <main className="p-5 md:p-15 px-auto">
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
      <div className="p-5 md:p-15">
        <ProductListbyCategory category="Aires" />
      </div>
      <article className="p-5 md:p-15">
        <Posts />
      </article>
      <div className="mb-10">
        <ChatbotScript />
      </div>
    </>
  );
}
 