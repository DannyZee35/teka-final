import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-footer-gradient p-20 mt-[100px]  absolute w-full  -top-[60px] -z-40 '>
        <div className='text-white mt-20  max-w-[1100px] m-auto flex flex-col sm:flex-row sm:items-start items-center gap-3 justify-between font-mont font-bold'>

     
          <Link href={"/"}>Home</Link>
  
          
          <div className='flex flex-col sm:items-start  items-center gap-5'>
          <Link href={"/"}>Services</Link>
          <Link className='font-normal' href={"/overview"}>Ad Management Overview</Link>

          </div>
          <div className='flex flex-col sm:items-start  items-center gap-5'>
          <Link href={"/"}>Company</Link>
          <Link className='font-normal' href={"/about"}>About Us</Link>
          <Link className='font-normal' href={"/contact-us"}>Contact Us</Link>

          </div>
          <div className='flex flex-col sm:items-start  items-center gap-5'>
          <Link href={"/"}>Resources</Link>
          <Link className='font-normal' href={"/blogs"}>Blog</Link>
          <Link className='font-normal' href={"/"}>Newsletter</Link>

          </div>
          <div className='flex flex-col sm:items-start  items-center gap-5'>
          <Link href={"/"}>Testimonials</Link>
          <Link className='font-normal' href={"/cases"}>Case Studies</Link>

          </div>
          </div>

<div className='flex items-center justify-center  sm:justify-between mt-20  max-w-[1100px] m-auto'>
<h1 className='text-white hidden sm:block'> 
    Teckametrics
</h1>
<div className='flex items-start  gap-5'>
            <Link href={'/'}><Image src={'/fb.png'} height={24} width={24}/></Link>
            <Link href={'/'}><Image src={'/twit.png'} height={24} width={24}/></Link>
            <Link href={'/'}><Image src={'/in.png'} height={24} width={24}/></Link>
            <Link href={'/'}><Image src={'/tube.png'} height={24} width={24}/></Link>
            <Link href={'/'}><Image src={'/mail.png'} height={24} width={24}/></Link>

          </div>
</div>
<div className="h-[2px] w-full bg-line-gradient mb-3 font-mont max-w-[1100px] m-auto mt-10">
            {" "}
          </div>

          <div className='flex items-center justify-between flex-col-reverse gap-5 sm:gap-0 sm:flex-row   max-w-[1100px] m-auto mt-10'>
            <h1 className='font-mont font-bold text-white opacity-60 text-center sm:text-start'>© 2015 - 2024 Teikametrics Inc. All Rights Reserved.</h1>
          <div className='font-bold font-mont text-white flex items-center flex-col sm:flex-row sm:items-start  gap-10'>
          <Link href={'/contact-us'}> Contact Teikametrics</Link>
          <Link href={'/'}> Privacy Policy</Link>
          <Link href={'/'}>Terms & Conditions</Link>

          </div>
          </div>
    </div>
  )
}

export default Footer