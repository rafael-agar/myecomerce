import { Button } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
import Image from 'next/image'
import GlobalApi from '../_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

function CartItemList({cartItemList, onDeleteItem}) {

    const [subtotal,setSubtotal]=useState(0);
    const [bolivaresPrecio, setBolivaresPrecio] = useState(null)
    const router=useRouter();

    useEffect(()=>{
        let total=0;
        cartItemList.forEach(element => {
            total=total+element.price;
        })
        setSubtotal(total);
    },[cartItemList])

    useEffect(() => {
        const fetchDollarPrice = async () => {
          const dollarPrice = await GlobalApi.getBolivares();
          setBolivaresPrecio(dollarPrice);
        };
      
        fetchDollarPrice();
      }, []);

      const handleWhatsAppOrder = () => {
        const message = GlobalApi.getWhatsAppMessage();
        const whatsappUrl = `https://wa.me/+584244365933?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        router.push('/');
      };

    

  return (
    <div>
        <div className='h-[500px] overflow-auto'>
            {cartItemList.map((cart,index)=>(
                <div className='flex justify-between items-start p-2 mb-5'>
                    <div className='flex gap-6 items-center'>
                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}${cart.image}`}
                    width={90} height={90} 
                    alt={cart.name}
                    className='border p-2'
                    />
                    <div className=''>
                        <h2 className='font-bold'>{cart.name}</h2>
                        <h2 className=''>Cantidad {cart.quantity}</h2>
                        <h2 className='text-lg font-bold'>$ {(cart.price).toFixed(2)}</h2>
                    </div>
                
                    </div>
                    <TrashIcon 
                    className='cursor-pointer'
                    onClick={()=>onDeleteItem(cart.id)} />
                </div>
            ))}
        </div>
        
        <div className='absolute w-[90%] pe-3 bottom-6 flex flex-col'>
            <h2 className='text-lg font-bold flex justify-between'>Sub Total REF: <span>${subtotal}</span></h2>
            <h5 className='text-sm flex justify-between'>Sub Total Bs: <span>${(subtotal * bolivaresPrecio).toFixed(2)}</span></h5>
            <Button onClick={handleWhatsAppOrder}>COMPRAR POR WHATSAPP</Button>
        </div>
    </div>
  )
}

export default CartItemList