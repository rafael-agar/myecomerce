import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose

} from "@/components/ui/dialog"
import ProductItemDetail from './ProductItemDetail'


function ProductItem2({product}) {
  return (
    <div className='p-2 md:p-6 flex flex-col justify-between sm:grid-cols-1 items-center justify-center bg-white shadow-lg rounded-lg hover:scale-105 transition-all duration-200 ease-in-out'>
      
      <Dialog>
        <DialogTrigger asChild>
          <div className='flex flex-col items-center justify-center cursor-pointer'>
          <Image src={product.attributes.image.data[0].attributes.url}
          alt={product.attributes.name}
          className="w-[200px] h-[200px] rounded-lg object-scale-down"
          width={400}
          height={500}
          />
          <p className='text-center font-bold'>{product.attributes.name}</p>
          <h3 className='text-center text-red-500 font-bold text-xl'>${product.attributes.mrp}</h3>
          
          {/* <Button 
            className='text-center my-2 text-white bg-primary hover:bg-primary/80 hover:text-white'
            variant="outline">Agregar al Carrito
          </Button> */}
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detalles del Producto</DialogTitle>
            <DialogDescription>
              <ProductItemDetail product={product} />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
          <DialogClose className='flex justify-center lg:hidden pt-4 lg:flex border-t-2 border-gray-300'>
            <Button className='text-back font-bold' type="button" variant="secondary">
              Seguir Comprando!
            </Button>
          </DialogClose>
        </DialogFooter>
        </DialogContent>
      </Dialog>


    </div>
  )
}

export default ProductItem2