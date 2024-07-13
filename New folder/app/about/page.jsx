import BrandSlider from "@components/BrandSlider";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const about = () => {
  return (
    <>
      <div className="container-lg mb-20">
        <div className="text-center max-w-[1100px] m-auto mt-20">
          <h1 className="bg-gradient bg-clip-text text-transparent font-mont font-bold text-2xl inline-block ">
            About Us
          </h1>
          <h1 className="text-4xl font-mont font-bold mt-5">
            We’re maximizing the potential of sellers and brand owners across
            the globe
          </h1>
        </div>
      </div>

      <Marquee pauseOnHover={true} speed={80}>
        <div className="flex items-end justify-between gap-10 mt-10">
          <Image src={"/nutribulllet.png"} height={120} width={150} />
          <Image src={"/rockport.png"} height={150} width={150} />
          <Image src={"/swanson.png"} height={150} width={150} />
        </div>
      </Marquee>

      <div className=" max-w-[1100px] gap-20 m-auto mt-20 grid grid-cols-2">
        <div className="col-span-1">
          <h1 className="font-bold font-mont text-3xl">Our company</h1>
          <p className="text-xl font-mont mt-5">
            Scaling a business on ecommerce marketplaces has become increasingly
            complex. Teikametrics is building the first Marketplace Optimization
            Platform that helps thousands of sellers and brand owners easily
            optimize their performance, across the most valuable marketplaces
            and business verticals.
          </p>
          <p className="text-xl font-mont mt-5">
            With our AI-powered technology and optional managed services, we
            eliminate tedious work for our customers so they can focus on what
            matters most — creating products and experiences that bring joy to
            their customers’ lives.
          </p>
        </div>
        <div className="relative w-full h-auto col-span-1">
          <Image src={"/about.png"} layout="fill" />
        </div>
      </div>

      <div className="bg-gradient  pt-20 mt-20">
        <div className="max-w-[1200px] m-auto flex items-center flex-col justify-between gap-5">
          <h1 className="font-mont font-bold text-white text-4xl text-center">
            We’re a global team solving global problems
          </h1>
          <p className="font-mont max-w-[600px]   text-white text-xl text-center">
            We’ve assembled the best team, from across every corner of the
            globe, to execute on Teikametrics’ vision of building the world’s
            first Marketplace Optimization Platform.
          </p>
          <div className="flex items-start justify-between gap-20 mt-10">
            <div className="flex items-center flex-col">
              <p className="mb-3 opacity-80 font-mont text-white">Founded in</p>
              <h1 className="text-5xl font-bold font-mont text-white">2015</h1>
            </div>
            <div className="w-[1px] mt-3 h-[4rem] bg-white opacity-80 "></div>

            <div className="flex items-center flex-col">
              <p className="mb-3 opacity-80 font-mont text-white">Founded in</p>
              <h1 className="text-5xl font-bold font-mont text-white">2015</h1>
            </div>
            <div className="w-[1px] mt-3  h-[4rem] bg-white opacity-80 "></div>

            <div className="flex items-center flex-col">
              <p className="mb-3 opacity-80 font-mont text-white">Founded in</p>
              <h1 className="text-5xl font-bold font-mont text-white">2015</h1>
            </div>
            <div className="w-[1px] mt-3  h-[4rem] bg-white opacity-80 "></div>

            <div className="flex items-center flex-col">
              <p className="mb-3 opacity-80 font-mont text-white">Founded in</p>
              <h1 className="text-5xl font-bold font-mont text-white">2015</h1>
            </div>
          </div>
          <Image src={"/map.png"} height={500} width={1800} />
        </div>

        <div className="max-w-[1100px] m-auto z-50 relative translate-y-1/2 rounded-xl p-20 bg-white">
          <div className="flex items-start justify-between gap-20">
            <div className="flex gap-5 items-center justify-center flex-col">
              <Image src={"/flag.png"} height={50} width={50} />
              <h1 className="text-3xl font-mont font-bold">Our Mission</h1>
              <p className="font-mont font-normal text-center text-xl">
                To help sellers and brand owners maximize their potential on the
                most valuable marketplaces by combining data, AI, and expertise.
              </p>
            </div>
            <div className="flex gap-5 items-center justify-center flex-col">
              <Image src={"/vision.png"} height={50} width={50} />
              <h1 className="text-3xl font-mont font-bold">Our Vision</h1>
              <p className="font-mont font-normal text-center text-xl">
                To be the world’s leading Marketplace Optimization Platform,
                used by every seller and brand owner, powering the future of
                ecommerce.
              </p>
            </div>
          </div>
        </div>
        <div className="  w-full h-[2rem]  bg-white"></div>
        <div className=" rounded-xl   bg-black">
          <div>
            <Image src={"/flag.png"} height={100} width={100} />
            <h1 className="text-3xl font-mont font-bold">Our Mission</h1>
            <p className="font-mont font-normal text-xl">
              To help sellers and brand owners maximize their potential on the
              most valuable marketplaces by combining data, AI, and expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
