'use client'
import React, { useState, useEffect } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
 import { Search } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import ProductItem from './ProductItem';


function SearchComponent() {

  const [productos, setProductos] = useState([])
  const [busqueda, setBusqueda]= useState("");
  const [productosFilter, setProductosFilter] = useState([]);


  const handleSearch = () => {
    const filtered = productos.filter((producto) =>
      producto.attributes.name.toLowerCase().includes(busqueda.toLowerCase())
    );
    setProductosFilter(filtered);
  };
  
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    handleSearch();
  };
  

  useEffect(() => {
    GlobalApi.getAllProducts().then(resp => {
      setProductos(resp)
    })
  }, [])




  return (
    <AlertDialog>
    <AlertDialogTrigger asChild>
        <Search />
    </AlertDialogTrigger>

    <AlertDialogContent className=
    'fixed transform top-0 translate-y-30' // Agregamos esta clase para desplazar el modal hacia arriba
>
  <AlertDialogHeader>
    <AlertDialogTitle>Que deseas buscar?</AlertDialogTitle>
    <AlertDialogDescription>
      <input
        type="text"
        placeholder="Televisor, Lavadora, etc..."
        className="bg-secondary p-2 rounded-lg w-full"
        value={busqueda}
        onChange={handleChange}
      />
    </AlertDialogDescription>
  </AlertDialogHeader>
  {busqueda.trim() !== '' && productosFilter.length > 0 && (
    <div>
      <h3>Resultados de búsqueda:</h3>
      <ul>
        {productosFilter.map((producto) => (
          <li key={producto.id}>
            <Dialog>
              <DialogTrigger asChild>
                <span className="cursor-pointer hover:underline">
                  {producto.attributes.name}
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{producto.attributes.name}</DialogTitle>
                  <DialogDescription>
                    {/* Contenido adicional del modal */}
                  </DialogDescription>
                </DialogHeader>
                <ProductItem product={producto} />
                <DialogFooter>
                  <DialogClose>Cerrar</DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </li>
        ))}
      </ul>
    </div>
  )}
  <AlertDialogFooter>
    <AlertDialogCancel>Cancel</AlertDialogCancel>
  </AlertDialogFooter>
</AlertDialogContent>




  </AlertDialog>
  )
}

export default SearchComponent