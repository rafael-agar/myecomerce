import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[500px]">
        <h1 className="text-[80px] font-extrabold text-gray-700">DISCULPE</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">Pagina No encontrada</p>
        <Link href="/">
            <Button>Volver a Inicio</Button>
        </Link>
    </div>
  )
}