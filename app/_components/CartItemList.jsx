import { Button } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function CartItemList({cartItemList, onDeleteItem}) {

    const [subtotal,setSubtotal]=useState(0);

    useEffect(()=>{
        let total=0;
        cartItemList.forEach(element => {
            total=total+element.amount;
        })
        setSubtotal(total.toFixed(2));
    },[cartItemList])

    

  return (
    <div>
        <div className='h-[500px] overflow-auto'>
            {cartItemList.map((cart,index)=>(
                <div className='flex justify-between items-start p-2 mb-5'>
                    <div className='flex gap-6 items-center'>
                    {/* <Image src={`${process.env.NEXT_PUBLIC_API_URL}${cart.image}`}
                    width={90} height={90} 
                    alt={cart.name}
                    className='border p-2'
                    /> */}
                    <div className=''>
                        <h2 className='font-bold'>{cart.name}</h2>
                        <h2 className=''>Quantity {cart.quantity}</h2>
                        <h2 className='text-lg font-bold'>$ {cart.amount}</h2>
                    </div>
                
                    </div>
                    <TrashIcon 
                    className='cursor-pointer'
                    onClick={()=>onDeleteItem(cart.id)} />
                </div>
            ))}
        </div>
        
        <div className='absolute w-[90%] pe-3 bottom-6 flex flex-col'>
            <h2 className='text-lg font-bold flex justify-between'>Sub Total: <span>${subtotal}</span></h2>
            <Button>COMPRAR</Button>
        </div>
    </div>
  )
}

export default CartItemList