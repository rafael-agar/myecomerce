'use client'
import React, { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import BolivaresBar from './BolivaresBar'

function Slider({ sliderList }) {
  const autoplayPlugin = useRef(Autoplay({ delay: 5000}))

  return (
    <>
      <Carousel
        opts={{ loop: true }} // Add the loop option here
        plugins={[autoplayPlugin.current]}
        // onMouseEnter={autoplayPlugin.current.stop}
        onMouseLeave={autoplayPlugin.current.reset}
      >
        <CarouselContent>
          {sliderList.map((slider, index) => (
            <CarouselItem key={index}>
              {slider.attributes.image.data[0].attributes.url && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${slider.attributes.image.data[0].attributes.url}`}
                  alt='icon'
                  width={1000}
                  height={400}
                  className="w-full h-[200px] md:h-[300px] object-cover rounded-2xl"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <BolivaresBar />
    </>
  )
}

export default Slider
