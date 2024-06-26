'use client'
import { useContext, useEffect, useState } from 'react'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingBasketIcon, ShoppingCart, LoaderCircle } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { UpdateCartContext } from '../_context/UpdateCart'

export default function ProductItemDetail({product}) {

  const [bolivaresPrecio, setBolivaresPrecio] = useState(null)
  const [updateCart, setUpdateCart] = useContext(UpdateCartContext);
  const [productTotalPrice, setProductTotalPrice] = useState(product.attributes.mrp)
  const [productQuantity, setProductQuantity] = useState(1)
  const [loading,setLoading]=useState(false);
  const router=useRouter();

  const handleIncrement = () => {
    setProductQuantity((prevQuantity) => prevQuantity + 1);
    setBolivaresPrecio((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setProductQuantity((prevQuantity) => prevQuantity - 1);
    setBolivaresPrecio((prevQuantity) => prevQuantity - 1);
  };

  useEffect(() => {
    const fetchDollarPrice = async () => {
      const dollarPrice = await GlobalApi.getBolivares();
      setBolivaresPrecio(dollarPrice);
    };
  
    fetchDollarPrice();
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Carrito:', cart);
  }, [updateCart]);
  
  const addToCart = () => {
    // Obtener el carrito actual del localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      cart[existingProductIndex].quantity += productQuantity;
    } else {
      // Si el producto no está en el carrito, agregarlo
      cart.push({
        id: product.id,
        name: product.attributes.name,
        price: product.attributes.mrp,
        quantity: productQuantity,
        image: product.attributes.image.data[0].attributes.url,
      });
    }
  
    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Mostrar un mensaje de éxito
    toast('Producto agregado al carrito');
  
    // Actualizar el estado del carrito
    setUpdateCart(!updateCart);
  };
  
  const handleWhatsAppOrder = () => {
    const message = GlobalApi.getWhatsAppMessage();
    const whatsappUrl = `https://wa.me/+584244365933?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const  comprarAhora = () => {
    addToCart()
    handleWhatsAppOrder()
  }
  
  

  return (
<>
    <div className='grid grid-cols-1 md:grid-cols-2 bg-white text-black'>
        <div className='flex flex-col items-center mb-5'>
          <Image 
              src={`${process.env.NEXT_PUBLIC_API_URL}${product.attributes.image.data[0].attributes.url}`} 
              width={300}
              height={300}
              alt={product.attributes.name}
              className='p-5 rounded-lg w-[300px] h-[320px] object-contain border' 
          />
          <h2 className='text-center pt-3'><strong>Medidas: </strong>Ancho: 1.5 Mts - Alto: 2 Mts</h2>
        </div>
        <div className='flex flex-col gap-3 items-center sm:items-start'>
            <h2 className='text-2xl font-bold mb-3'>{product.attributes.name}</h2>
            <p className='text-black'>{product.attributes.minidescription}</p>
            <h2>
              <span className='font-bold'>Categoría: </span>
              {product.attributes.categories.data.length > 0
                ? product.attributes.categories.data[0].attributes.name
                : 'No category'}
            </h2>
            {/* $$ */}
            <h3 className='text-start font-bold text-3xl mt-5'>REF: <strong className='text-red-500'>${(productTotalPrice * productQuantity).toFixed(2)}</strong></h3>
            {/* BSF */}
            <h3 className='text-start font-bold text-xl'>Bs. {(bolivaresPrecio * productTotalPrice).toFixed(2)}</h3>
            <div className='flex flex-col sm:items-baseline gap-3'>
              <div className='p-2 sm:w-[200px] justify-center border-2 border flex items-center gap-10 px-5'>
                <button disabled={productQuantity == 1} onClick={handleDecrement}>-</button>
                <p>{productQuantity}</p>
                <button disabled={productQuantity == 5} onClick={handleIncrement}>+</button>
              </div>
              <Button onClick={()=>addToCart()} disabled={loading} className='flex w-100 sm:w-[200px] items-center justify-center gap-3 border border-input hover:bg-accent hover:text-accent-foreground'>
                <ShoppingCart />
                {loading?<LoaderCircle className='animate-spin' />:'Agregar al Carrito'}
              </Button>
              <Button onClick={comprarAhora} className='bg-black w-100 sm:w-[200px] gap-3 items-center justify-center text-white hover:bg-accent hover:text-accent-foreground'>
                REALIZAR PEDIDO AHORA!
              </Button>
            </div>            
        </div>

    </div>


    {/* DESCRIPCION */}
    <div className="relative flex flex-col justify-between w-full mt-10">
    <div className="w-full">
      <div className="flex flex-col w-full sm:flex-row">
        <div className="w-full mb-5 sm:mb-0">
          <div className="relative h-full ml-0 mr-0 sm:mr-10">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-primary rounded-lg"></span>
            <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
              <div className="flex items-center -mt-1 justify-center">
                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 text-center">Descripción</h3>
              </div>
              <p className="mt-3 mb-1 text-center text-xs font-medium text-indigo-500 uppercase">------------</p>
              <p className="text-gray-600 text-center">
              
              
Material de calidad.
Ahorro de energía.
Corriente 110V.
Con gabinete incluido.
Compresor y gas R-134.
Dispensador de agua fría, agua caliente y natural.
Dimensiones aproximadas: Altura: 99 cm. Ancho: 30 cm. Profundidad: 32 cm.



              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</>

  )
}
