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
    DropdownMenuPortal,
    DropdownMenuSubContent,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuGroup,
    DropdownMenuShortcut
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
  import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
import CartItemList from './CartItemList'
import { toast } from'sonner'
  

function Header() {

    const [categories, setCategories] = useState([])
    // const user=JSON.parse(sessionStorage.getItem('user'));
    // const jwt=sessionStorage.getItem('jwt');
    // const isLogin=sessionStorage.getItem('jwt')?true:false;
    const [totalCartItem,setTotalCartItem]=useState(0)
    const [cartItemList,setCartItemList]=useState([]);
    // const [updateCart, setUpdateCart] = useState(0)
    const [updateCart, setUpdateCart] = useContext(UpdateCartContext);
    // console.log('cartItemList'+cartItemList)
    const router = useRouter()
  
    useEffect(() => {
        getCategoryList()
    }, [])

    // get cart items
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length > 0) {
            setCartItemList(cart)
            setTotalCartItem(cart.length)
        }
        console.log('Carrito:', cart);
      }, [updateCart]);

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
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setUpdateCart(cart)
    }

    // const onSignOut = () => {
    //     sessionStorage.clear()
    //     setTotalCartItem(0)
    //     router.push('/sign-in')
    // }

    const onDeleteItem = (itemId) => {
        // GlobalApi.deleteCartItem(id, jwt).then(resp => {
        //     toast('Producto removido!')
        //     getCartItems()
        // })
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cart.filter((item) => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast('Producto removido!')
        getCartItems()
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
                                src={category.attributes.icon.data[0].attributes.url}
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

            {/* SEARCH */}
            <div className="flex flex-col items-center md:flex-row md:justify-center">
            <div className="md:flex gap-3 items-center border rounded-full p-2 hidden md:flex">
              <Search />
              <input
                type="text"
                placeholder="Buscar"
                className="outline-none"
              />
            </div>
            <div className="flex gap-3 items-center border rounded-full p-2 md:hidden">
              <Search />
            </div>

          </div>

        </div>

        {/* CARRITO */}
        <div className='flex gap-5 items-center ps-3'>

            {/* MENU */}
            {/* <Menubar className='text-primary'>
            <MenubarMenu className='text-primary'>
                <MenubarTrigger>Menú</MenubarTrigger>
                <MenubarContent>
                <Link href='/productos'><MenubarItem className="bg-secondary">Productos</MenubarItem></Link>
                <Link href='/tiendas'><MenubarItem className='text-primary'>Nuestras Tiendas</MenubarItem></Link>
                <Link href='/notocias'><MenubarItem className='text-primary'>Noticias</MenubarItem></Link>
                <MenubarSeparator />
                
                <Link href='/afiliacion'><MenubarItem className='text-primary'>Afiliación</MenubarItem></Link>
                <Link href='/credimax'><MenubarItem className='text-primary'>CREDIMAX PRIORITYMAX</MenubarItem></Link>
                <MenubarSeparator />
                <Link href='/contacto'><MenubarItem className='text-primary'>Contacto</MenubarItem></Link>
                </MenubarContent>
            </MenubarMenu>
            </Menubar> */}


           
        <Sheet>
            <SheetTrigger>
                <p className='flex gap-2 items-center text-lg'> 
                    <ShoppingCart/>
                    <span className='bg-primary text-white px-2 rounded-full'>{totalCartItem}</span>
                </p>
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                <SheetTitle className='bg-primary text-white font-bold text-lg p-2'>Mi Carrito</SheetTitle>
                <SheetDescription>
                    <CartItemList cartItemList={cartItemList} onDeleteItem={onDeleteItem}/>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>


            {/* {!isLogin 
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

            } */}
            
    <DropdownMenu>
      <DropdownMenuTrigger className='bg-secondary' asChild>
        <Button variant="outline">Menú</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <Link href='/productos'>Productos</Link>
          </DropdownMenuItem>

        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {/* <UserPlus className="mr-2 h-4 w-4" /> */}
              <span>Nuestras Tiendas</span>
            </DropdownMenuSubTrigger>
            
            {/* TIENDAS */}
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  {/* <Mail className="mr-2 h-4 w-4" /> */}
                  <Link href='/tiendas'>Barinas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <MessageSquare className="mr-2 h-4 w-4" /> */}
                  <span>Caracas</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <MessageSquare className="mr-2 h-4 w-4" /> */}
                  <span>Carabobo</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <MessageSquare className="mr-2 h-4 w-4" /> */}
                  <span>Lara</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <MessageSquare className="mr-2 h-4 w-4" /> */}
                  <span>Zulia</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <MessageSquare className="mr-2 h-4 w-4" /> */}
                  <span>Monagas</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <MessageSquare className="mr-2 h-4 w-4" /> */}
                  <span>Miranda</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <MessageSquare className="mr-2 h-4 w-4" /> */}
                  <span>Yaracuy</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
            {/* END TIENDAS */}

        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {/* <Github className="mr-2 h-4 w-4" /> */}
          <Link href='/noticias'>Productos</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {/* <LifeBuoy className="mr-2 h-4 w-4" /> */}
          <Link href='/afiliacion'>Afiliación</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {/* <Cloud className="mr-2 h-4 w-4" /> */}
          <Link href='/credimax'>CREDIMAX PRIORITYMAX</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {/* <LogOut className="mr-2 h-4 w-4" /> */}
          <Link href='/contacto'>Contacto</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
        
    </header>
  )
}

export default Header