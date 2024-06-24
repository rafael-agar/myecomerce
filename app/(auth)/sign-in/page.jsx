'use client'
import GlobalApi from '@/app/_utils/GlobalApi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { LoaderIcon } from 'lucide-react'

function SigIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const [loader, setLoader] = useState()
  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt')
    if(jwt) {
        router.push('/')
    }
}, [])

  const onSignIn = () => {
    setLoader(true)
    GlobalApi.signIn(email, password).then(resp => {
      console.log(resp.data.user)
      console.log(resp.data.jwt)
      sessionStorage.setItem('user', JSON.stringify(resp.data.user))
      sessionStorage.setItem('jwt', resp.data.jwt)
      toast("Has iniciado sesión exitosamente!")
      router.push('/')
      setLoader(false)
    }, (e) => {
      toast(e?.response?.data?.error?.message || "Error al iniciar sesión")
      setLoader(false)
    })
  }
  
  return (
    <div className='flex items-baseline justify-center my-10'>
        <div className='flex flex-col items-center justify-center p-10 bg-slate-100 border'>
            <h1 className='font-bold text-3xl mb-4'>Iniciar Sesión</h1>
            <Link href="/">
                <Image src="/Multimax_Store_logo.png" alt="logo" width={200} height={200} />
            </Link>
            <h2 className='font-bold mt-4'>Escriba su Correo Electrónico y Contraseña para Iniciar Sesión!</h2>
            <div className='flex flex-col items-center justify-center mt-2 gap-5 w-full sm:w-[500px]'>
                <Input type='email' placeholder="nombre@ejemplo.com" className="mt-2" onChange={(e) => setEmail(e.target.value)}/>
                <Input type='password' placeholder="Contraseña" className="mt-2" onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={()=>onSignIn()} className='w-full mt-2' disabled={!(email||password)}
                >
                {loader ? <LoaderIcon className='animate-spin'/> : 'Iniciar'}</Button>
                <p>Usted No posee una cuenta! 
                    <Link href="/create-account" className='text-blue-500 text-blue-500'>&nbsp;&nbsp;Crear una cuenta</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SigIn