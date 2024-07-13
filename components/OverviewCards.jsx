import Image from 'next/image';
import React from 'react';

const OverviewCards = ({ image, heading, text,hasImage }) => {
  return (
    <div className='flex flex-col w-full items-center sm:items-start'> {/* Added mx-auto and text-center classes */}
      <div className= {`${hasImage ? 'block' : 'hidden'} w-[100px] h-[100px] mb-4 relative`}>
        <Image className='' src={image} layout='fill' />
      </div>
      <h1 className='mb-4 font-mont font-bold text-lg'>{heading}</h1>
      <p className='font-mont text-normal text-center sm:text-left'>{text}</p>
    </div>
  );
};

export default OverviewCards;
