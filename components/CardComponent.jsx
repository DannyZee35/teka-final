import Image from 'next/image'
import React from 'react'

const CardComponent = ({avatar,icon,text,heading,para}) => {
    return (
        <div className='flex flex-col text-white gap-5 max-w-[500px] bg-cards-gradient rounded-lg p-5 gradient-border' >
            <div className='flex justify-between gap-3  items-center '> 

                <Image className='rounded-full flex-none' src={avatar} height={50} width={50} />
                <div className='flex-1'>
                    <h1 className='font-bold font-mont '>{heading}</h1>
                    <p className='font-mont '>{text}</p>
                </div>
                <Image className='' src={icon} height={100} width={100} />
            </div>
          
                <p className='font-mont '>
                    {para}
                </p>
            
        </div>
    )
}

export default CardComponent