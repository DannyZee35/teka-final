

import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const BrandSlider = () => {

  return (
    <div className=''>
      <div className=' text-center'>
      <h1 className='text-md inline-block bg-clip-text text-transparent font-mont  bg-text-gradient     font-bold'>
        
        TRUSTED BY THE WORLD’S LEADING BRANDS</h1>
      </div>
   

      <Marquee pauseOnHover={true} speed={80}>
        <div className='flex items-end justify-between gap-10 mt-10'>

          <Image src={'/nutribulllet.png'} height={120} width={150} />
          <Image src={'/rockport.png'} height={150} width={150} />
          <Image src={'/swanson.png'} height={150} width={150} />
        </div>
      </Marquee>




    </div>
  )
}

export default BrandSlider