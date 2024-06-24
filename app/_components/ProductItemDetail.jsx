'use client'
import { useContext, useState } from 'react'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingBasketIcon, ShoppingCart, LoaderCircle } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { UpdateCartContext } from '../_context/UpdateCart'

export default function ProductItemDetail({product}) {

  const jwt=sessionStorage.getItem('jwt');
  const user=JSON.parse(sessionStorage.getItem('user'));
  const [bolivaresPrecio, setBolivaresPrecio] = useState(GlobalApi.getBolivares())
  const [updateCart, setUpdateCart] = useContext(UpdateCartContext);
  const [productTotalPrice, setProductTotalPrice] = useState(product.attributes.mrp)
  const [productQuantity, setProductQuantity] = useState(1)
  const [loading,setLoading]=useState(false);
  const router=useRouter();

  const handleIncrement = () => {
    setProductQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setProductQuantity((prevQuantity) => prevQuantity - 1);
  };

  const addToCart = () => {
    setLoading(true)
    if(!jwt)
      {
          router.push('/sign-in');
          setLoading(false)
          return ;
      }
    
    const data={
      data:{
        quantity:productQuantity,
        amount:(productQuantity*productTotalPrice).toFixed(2),
        productos:product.id,
        users_permissions_user:user.id,
        userId:user.id
      }
    }
    console.log(data)

    GlobalApi.addToCart(data,jwt).then(resp=>{
      console.log(resp);
      toast('Producto Agregado al Carrito');
      setUpdateCart(!updateCart);
      setLoading(false)
  },(e)=>{
      toast('Error while adding into cart');
      setLoading(false)

  })


  }

  return (
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
            <h3 className='text-start font-bold text-xl'>{bolivaresPrecio}</h3>
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
              <Button className='bg-black w-100 sm:w-[200px] gap-3 items-center justify-center text-white hover:bg-accent hover:text-accent-foreground'>
                <ShoppingBasketIcon /> COMPRAR YA!
              </Button>
            </div>            
        </div>

    </div>
  )
}
