import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import { Button } from "@/components/ui/button"
  

function page() {
  return (
    <div className='me-5 ms-5'>
    <hero className="p-16">
        <div className="mx-auto">
            <div className="relative z-20 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
                style={{backgroundImage: "linear-gradient(to left bottom, #2ea2cc, #0693e3, #8ed1fc)"}}>
                <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
                    <div className="lg:self-center">
                        <h1 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                            <span className="block">Multimax Barinas</span>
                        </h1>
                        <p className="mt-4 text-base leading-6 text-white">
                        Barinas se convirtió en el año 2021 en el primer estado de la región llanera, en recibir a MultiMax Store, que iniciaba una apuesta más agresiva por el país, en un año que estuvo marcado por una amplia agenda de inauguraciones; MultiMax Anzoategui le seguiria los pasos.
                        </p>
                        <p className="mt-4 text-base leading-6 text-dark-blue-800">
                        </p>
                        <a href="https://maps.app.goo.gl/sDXpyaihWyeekUfs6" target="_blank" style={{backgroundColor: "#000"}}
                            className="mt-8 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium  text-white transition duration-150 ease-in-out">
                            Ver Ubicación
                        </a>
                        <HoverCard>
                        <HoverCardTrigger asChild className="text-white ps-5">
                            <Button variant="link">---Horario---</Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-full">
                        Lunes a Domingos 9:00 am a 7:00 pm.
                        </HoverCardContent>
                        </HoverCard>

                    </div>
                </div>
                <div className="relative 3/5 -mt-6pb- md:pb-1/2">
                    <img className="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-10 lg:translate-y-20"
                    src="https://multimaxstore.com/wp-content/uploads/2022/10/Multimax-Barinas-2.jpg" />
                </div>
            </div>
        </div>
    </hero>


        {/* MAPA */}
        <section className="bg-secondary rounded-lg">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Ubicanos</h2>
            <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3944.7915935245037!2d-70.262767!3d8.615997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b574cbf0651a7%3A0xe5b6e3076d153c25!2sCentro%20Comercial%20Plaza%20Jardin!5e0!3m2!1ses!2sve!4v1719441714204!5m2!1ses!2sve"
                        width="100%" height="480" style={{border:0}} allowFullScreen loading="lazy"></iframe>
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                             <p className="mt-1 text-gray-600">El día jueves 29 de abril del año 2021 se inauguró la sexta sede de MultiMax Store, en el Centro Comercial Locatel de la ciudad de Barinas, convirtiéndose así en la primera ubicada en la región de Los Llanos venezolanos.</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <p className="mt-1 text-gray-600">Esta sede de Multimax que cuenta con más de 3000 metros cuadrados de exhibición, tiene una ubicación privilegiada a orillas de la avenida Alberto Arvelo Torrealba, de la capital del estado Barinas, lo que la hace de fácil acceso.</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <p className="mt-1 text-gray-600">La tienda cuenta con dos exhibiciones externas, con vista al estacionamiento del centro comercial, de las marcas Xiaomi y Nespresso, dos de los aliados comerciales de la multimarca. El mencionado centro comercial cuenta con más de 200 puestos de estacionamiento.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    {/* GALLERY */}
    <section className="flex flex-col lg:h-svh justify-center items-center">
    <div className="flex flex-wrap mx-auto md:flex-nowrap border-t pt-12">

    <div className="relative flex flex-col  m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">

    <article className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative transform duration-500 group bg-[url('https://multimaxstore.com/wp-content/uploads/2022/10/Multimax-Barinas-4.jpg')]">

    <div className="relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] transform duration-500">

        <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">

        <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500"> Immerse yourself in a seamless experience where every touchpoint anticipates your needs. Description one. </p>

        </div>

    </div>

    </article>

    </div>


    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">

    <article className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative transform duration-500 group bg-[url('https://multimaxstore.com/wp-content/uploads/2022/10/Multimax-Barinas-3.jpg')]">

    <div className="relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] transform duration-500">

        <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">

        <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500"> Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions. Description four. </p>

        </div>

    </div>

    </article>

    </div>

    <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">

    <article className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative transform duration-500 group bg-[url('https://multimaxstore.com/wp-content/uploads/2022/10/Multimax-Barinas-4.jpg')]">

    <div className="relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] transform duration-500">

        <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">

        <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500"> Join us in embracing sustainability, where design and functionality meet eco-conscious decisions. Description five. </p>

        </div>

    </div>

    </article>

    </div>

    <div className="relative flex flex-col  m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">

    <article className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative transform duration-500 group bg-[url('https://multimaxstore.com/wp-content/uploads/2022/10/Multimax-Barinas-4.jpg')]">

    <div className="relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] transform duration-500">

        <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">

        <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500"> Immerse yourself in a seamless experience where every touchpoint anticipates your needs. Description one. </p>

        </div>

    </div>

    </article>

    </div>

    </div> {/* Starts links to tutorial */}
    </section>







    </div>
  )
}

export default page