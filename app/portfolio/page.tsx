import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  weight: ["100", "200", "500"],
  subsets: ["latin"]
})

export default function Portfolio() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className=''>
        <p className={`text-center text-4xl ${poppins.className}`}>Coming Soon...</p>
      </div>
    </div>
  )
}
