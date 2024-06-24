'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { LoaderIcon } from 'lucide-react'

function CreateAccount() {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()

    // const params = usePathname()
    // const showHeader = params === '/sign-in' || params === '/create-account' ? false : true

    const [loader, setLoader] = useState()
    useEffect(() => {
        const jwt = sessionStorage.getItem('jwt')
        if(jwt) {
            router.push('/')
        }
    }, [])

    const onCreateAccount = () => {
        setLoader(true)
        GlobalApi.registerUser(username,email,password).then(resp => {
            console.log(resp.data.user)
            console.log(resp.data.jwt)
            sessionStorage.setItem('user', JSON.stringify(resp.data.user))
            sessionStorage.setItem('jwt', resp.data.jwt)
            toast("Cuenta creada exitosamente!")
            router.push('/')
            setLoader(false)
        }, (e) => {
            toast(e?.response?.data?.error?.message || "Error al creando su cuenta")
            setLoader(false)
        })
    }

  return (
    <div className='flex items-baseline justify-center my-10'>
        <div className='flex flex-col items-center justify-center p-10 bg-slate-100 border'>
            <h1 className='font-bold text-3xl mb-4'>Crear una Cuenta</h1>
            <Link href="/">
                <Image src="/Multimax_Store_logo.png" alt="logo" width={200} height={200} />
            </Link>
            <h2 className='font-bold mt-4'>Escriba su Correo Electrónico y Contraseña para crear una cuenta!</h2>
            <div className='flex flex-col items-center justify-center mt-2 gap-5 w-full sm:w-[500px]'>
                <Input placeholder="Nombre y Apellido" className="mt-2" onChange={(e) => setUsername(e.target.value)} />
                <Input type='email' placeholder="nombre@ejemplo.com" className="mt-2" onChange={(e) => setEmail(e.target.value)}/>
                <Input type='password' placeholder="Contraseña" className="mt-2" onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={()=>onCreateAccount()} className='w-full mt-2' disabled={!(username||email||password)}
                >
                {loader ? <LoaderIcon className='animate-spin'/> : 'Crear Cuenta'}</Button>

                <p>Si ya usted ya posee una cuenta! 
                    <Link href="/sign-in" className='text-blue-500 text-blue-500'>&nbsp;&nbsp;Iniciar Sesión</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount