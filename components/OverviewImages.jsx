

import Image from 'next/image'
import React from 'react'

const OverviewImages = () => {

    const height=50;
    const width =90;
    return (
        <div>

            <div className='flex items-center justify-center gap-20 mb-3 flex-wrap'>
                <Image src={'/pics/swanson.png'} height={height} width={width} />
                <Image src={'/pics/dickies.png'} height={height} width={width} />
                <Image src={'/pics/rockport.png'} height={height} width={width} />
                <Image src={'/pics/mdesign.png'} height={height} width={width} />
                <Image src={'/pics/timberland.png'} height={height} width={width} />
                <Image src={'/pics/elf.png'} height={height} width={width} />
                <Image src={'/pics/conair.png'} height={height} width={width} />

            </div>
            <div className=' items-center justify-center gap-20 hidden sm:flex'>
                <Image src={'/pics/splenda.png'} height={height} width={width} />
                <Image src={'/pics/nutribullet.png'} height={height} width={width} />
                <Image src={'/pics/reef.png'} height={height} width={width} />
                <Image src={'/pics/icon.png'} height={height} width={width} />
                <Image src={'/pics/nutrafol.png'} height={height} width={width} />
                <Image src={'/pics/munchkin.png'} height={height} width={width} />
                <Image src={'/pics/clarks.png'} height={height} width={width} />

            </div></div>
    )
}

export default OverviewImages