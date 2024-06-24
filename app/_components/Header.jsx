"use client"
import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { CircleUserRound, LayoutGrid, Search, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import GlobalApi from '../_utils/GlobalApi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UpdateCartContext } from '../_context/UpdateCart'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import CartItemList from './CartItemList'
import { toast } from'sonner'
  

function Header() {

    const [categories, setCategories] = useState([])
    const user=JSON.parse(sessionStorage.getItem('user'));
    const jwt=sessionStorage.getItem('jwt');
    const isLogin=sessionStorage.getItem('jwt')?true:false;
    const [totalCartItem,setTotalCartItem]=useState(0)
    const [cartItemList,setCartItemList]=useState([]);
    const [updateCart, setUpdateCart] = useContext(UpdateCartContext);
    console.log('cartItemList'+cartItemList)
    const router = useRouter()

    // useEffect(() => {
    //     // Verifica si sessionStorage está disponible (en el cliente)
    //     const isClient = typeof window !== 'undefined';
    
    //     if (isClient) {
    //       const jwt = sessionStorage.getItem('jwt');
    //       setIsLogin(!!jwt); // Establece isLogin según el valor de jwt
    //     }
    //   }, []);
   
    useEffect(() => {
        getCategoryList()
    }, [])

    // get cart items
    useEffect(()=>{
        getCartItems();
    },[updateCart])

    // get category list
    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            setCategories(resp.data.data)
        })
    }

        /**
     * Used to get Total Cart Item
     */
    const getCartItems = async () => {
        if (user) {
            const cartItemList_ = await GlobalApi.getCartItems(user.id, jwt);
            console.log('ItemList_' + cartItemList_);
            setTotalCartItem(cartItemList_?.length);
            setCartItemList(cartItemList_);
        }
    }

    const onSignOut = () => {
        sessionStorage.clear()
        setTotalCartItem(0)
        router.push('/sign-in')
    }

    const onDeleteItem = (id) => {
        GlobalApi.deleteCartItem(id, jwt).then(resp => {
            toast('Producto removido!')
            getCartItems()
        })
    }

return (
    <header className='p-5 shadow-md flex justify-between'>
        <div className='flex items-center gap-8'>
            <Link href='/'><Image src='/Multimax_Store_logo.png' alt='logo' width={200} height={150}/></Link>

                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <p className='hidden md:flex gap-2 items-center
                        border rounded-full p-2 px-10 bg-slate-100 cursor-pointer
                        '>
                        <LayoutGrid className='h-6 w-6'/>Categorías
                    </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {/* <DropdownMenuLabel>Lista</DropdownMenuLabel> */}
                    <DropdownMenuSeparator />

                    {categories.map((category, index) => (
                    <Link key={index} href={`/categoria/${category.attributes.name}`}>
                        <DropdownMenuItem key={index} className="flex gap-2 items-center">
                        {category?.attributes?.icon?.data[0].attributes?.url && (
                            <Image
                                src={`${process.env.NEXT_PUBLIC_API_URL}${category.attributes.icon.data[0].attributes.url}`}
                                unoptimized={true}
                                alt="icon"
                                width={20}
                                height={20}
                            />
                           
                        )}
                            <p className='text-sm'>{category?.attributes?.name}</p>
                        </DropdownMenuItem>
                    </Link>
                ))}


                </DropdownMenuContent>
                </DropdownMenu>


            <div className='md:flex gap-3 items-center border rounded-full p-2 hidden'>
                <Search/>
                <input type='text' placeholder='Buscar' className='outline-none' />
            </div>
        </div>

        <div className='flex gap-5 items-center'>
            
            <Sheet>
                <SheetTrigger>
                    <p className='flex gap-2 items-center text-lg'> 
                        <ShoppingCart/>
                        <span className='bg-primary text-white px-2 rounded-full'>{totalCartItem}</span>
                    </p>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle className='bg-primary text-white font-bold text-lg p-2'>My Carro</SheetTitle>
                    <SheetDescription>
                        <CartItemList cartItemList={cartItemList} onDeleteItem={onDeleteItem}/>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>


            {!isLogin 
                ? <Link href={'/sign-in'}> <Button>Login</Button> </Link> 
                : 
                <DropdownMenu>
                <DropdownMenuTrigger>
                    <Link href={'/profile'}> <CircleUserRound className='h-7 w-7 text-primary bg-secondary rounded-full cursor-pointer' /> </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Mi Información</DropdownMenuItem>
                    <DropdownMenuItem>Ordenes</DropdownMenuItem>

                    <DropdownMenuItem onClick={() => onSignOut()}>Cerrar Sesión</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>

            }
        </div>

    </header>
  )
}

export default Header