"use client"

import React from 'react'
import Image from 'next/image'
import useMediaQuery from '@hooks/useMediaQuery'


const Percentages = ({ icon, text,text2,text3,text4, number, number2, number3, number4,iconImage }) => {

    const isMobile = useMediaQuery('(min-width: 768px)');
  return (
    <div className='bg-card-gradient w-full sm:w-auto '>
             <Image className= 'absolute ' src={iconImage} height={100} width={100}/> 

   
    <div className={`flex flex-col sm:flex-row  items-center gap-10  ${isMobile ? 'divide-x-[2px]' :'divide-y-[2px]'  }  divide-purple-500  p-14 rounded-lg`}>
 
    <div className='flex px-5 w-full sm:w-auto items-center justify-start flex-col'>
        <Image src={icon} height={5} width={100} />
        <h1 className='font-bold text-3xl font-mont  mb-2 bg-gradient bg-clip-text text-transparent'>{number}</h1>
        <p className='text-normal font-mont '>{text}</p>

    </div>
  
    <div className='flex px-5 w-full sm:w-auto items-center justify-start flex-col'>
        <Image src={icon} height={5} width={100} />
        <h1 className='font-bold text-3xl font-mont  mb-2 bg-gradient bg-clip-text text-transparent'>{number2}</h1>
        <p className='text-normal font-mont '>{text2}</p>

    </div>
    <div className='flex px-5  w-full sm:w-auto  items-center justify-start flex-col'>
        <Image src={icon} height={5} width={100} />
        <h1 className='font-bold font-mont  text-3xl mb-2 bg-gradient bg-clip-text text-transparent'>{number3}</h1>
        <p className='text-normal font-mont  block'>{text3}</p>

    </div>
    <div className='flex px-5  w-full sm:w-auto items-center  flex-col'>
        <Image src={icon} height={5} width={100} />
        <h1 className='font-bold font-mont  text-3xl mb-2 bg-gradient bg-clip-text text-transparent'>{number4}</h1>
        <p className='text-normal font-mont  block'>{text4}</p>

    </div>
</div> </div>
  )
}

export default Percentages