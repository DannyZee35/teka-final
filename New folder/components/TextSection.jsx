


import Image from 'next/image'
import React from 'react'


const TextSection = ({ mainHeading, heading, para, tagLine, LargeImage, reverse,}) => {
    return (
        <>
            <div className={`max-w-[800px] px-[40px] sm:px-[0px] gap-10 flex flex-col-reverse sm:flex-row  items-center m-auto justify-around ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                <div className='flex items-start flex-col'>
                    <h1 className='text-4xl font-mont   mb-3  text-transparent bg-gradient bg-clip-text font-bold'>{mainHeading}</h1>
                    <h1 className='text-black font-mont  mb-3  font-bold text-4xl'>{heading}</h1>
                    <p className='text-black font-mont  mb-3 text-xl'>{para}</p>
                    <p className='text-wrap font-mont '>{tagLine}</p>
                   
                </div>
                <div className='w-full  sm:h-[400px]  relative'>
                    <Image src={LargeImage} layout='fill' />
                </div>

            </div>
        </>
    )
}

export default TextSection