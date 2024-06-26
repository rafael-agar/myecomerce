'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import GlobalApi from '../_utils/GlobalApi';

function BolivaresBar() {

    const [bolivaresPrecio, setBolivaresPrecio] = useState(null)
const [currentDate, setCurrentDate] = useState(new Date());

useEffect(() => {
    const fetchDollarPrice = async () => {
      const dollarPrice = await GlobalApi.getBolivares();
      setBolivaresPrecio(dollarPrice);
    };
  
    fetchDollarPrice();
  }, []);

// useEffect(() => {
//     const interval = setInterval(() => {
//       const currentDate = new Date();
//       const formattedDate = currentDate.toLocaleDateString(undefined, {
//         weekday: 'long',
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });
//       setCurrentDate(formattedDate);
//     }, 1000);
  
//     return () => clearInterval(interval);
//   }, []);

  return (
    
    <div className='flex flex-col items-center lg:flex lg:flex-row lg:justify-center mt-3'>
    <p className='flex gap-2 items-center text-xs'>Cambio Oficial: <span className='font-bold' suppressHydrationWarning>Bs.{bolivaresPrecio}</span></p>
    {/* <p className='text-xs'> - {currentDate.toLocaleString()}</p> */}
    </div>



  )
}

export default BolivaresBar
