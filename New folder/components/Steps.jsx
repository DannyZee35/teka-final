

import Image from 'next/image'
import React from 'react'

const Steps = ({image,heading,text}) => {
  return (
  
    
        <div className='sm:mb-[30px] '>
            <div className='flex items-start gap-4 '>
                <Image src={image} height={200} width={50}/>
                <div>
                    <h1 className='font-mont font-bold mb-5 '>
                        {heading}
                    </h1>
                    <p className='font-mont '>{text}</p>
                </div>
            </div>
        </div>
   
  )
}

export default Steps