"use client";

import Button from "@components/Button";
import OverviewCards from "@components/OverviewCards";
import OverviewImages from "@components/OverviewImages";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import Banner from "@components/Banner";


 
const page = () => {
  const [IconHovered, setIconHovered] = useState(false);
   return (
    <>
      <div className="container-lg p-5 bg-second-gradient  pt-10">
        <div className="max-w-[1100px] mt-[50px] m-auto gap-[100px] flex flex-col sm:flex-row items-center justify-between">
          <div className=" flex flex-col gap-3 items-start justify-start">
            <h1 className="text-center sm:text-left w-full  font-bold  text-xl font-mont bg-text2-gradient inline-block bg-clip-text text-transparent">
              {" "}
              Ad Management Services
            </h1>
            <h1 className="text-center sm:text-left font-bold mb-7  text-5xl font-mont leading-tight	">
              {" "}
              Drive industry-leading growth with our optional expert ad
              management on Amazon & Walmart{" "}
            </h1>
            <p className="text-center sm:text-left mb-7 text-xl font-mont">
              Combine day-to-day ad management, market expertise, and the power
              of Flywheel technology to surpass your goals on Amazon &
              Walmart.com.
            </p>
            <div className="m-auto sm:m-0">
              <Button
                padding="px-[50px] p-4"
                text={"Lets Talk"}
                color="text-white"
                backgroundColor="bg-black"
              />
            </div>
          </div>

          <div className="w-full sm:w-[1600px]  h-[200px] sm:h-[400px]  relative">
            <Image src={"/Dominate.png"} layout="fill" />
          </div>
        </div>

        <div className="text-center mt-10">
          <h1 className="font-bold mb-20 text-lg font-mont bg-text2-gradient inline-block bg-clip-text text-transparent">
            WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500
          </h1>
          <div className="mb-10">
            <OverviewImages />
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] mt-10 m-auto p-5 ">
        <div className="text-center">
          <h1 className="mb-4 font-bold font-mont text-xl bg-text2-gradient bg-clip-text text-transparent inline-block">
            Your Walmart & Amazon Advertising. Optimized.
          </h1>
        </div>

        <h1 className="text-center font-bold font-mont text-5xl  ">
          The advertising management you need to drive results on Amazon and
          Walmart.com
        </h1>

        <div className="flex mt-10 flex-col sm:flex-row items-start gap-10">
          <OverviewCards
            hasImage={true}
            image={"/ai.png"}
            heading={"AI-powered Flywheel Technology"}
            text={
              "Stay ahead of the competition. Compete at the highest (and fastest) level possible with our proprietary, goal-based artificial intelligence algorithms."
            }
          />
          <OverviewCards
            hasImage={true}
            image={"/ads.png"}
            heading={
              "Advertising Account Management                                                "
            }
            text={
              "With your goals in mind, we handle the day-to-day management of your advertising optimization. Following our proven playbook for success, you can rest assured your ads are in good hands. "
            }
          />
          <OverviewCards
            hasImage={true}
            image={"/expertise.png"}
            heading={"Marketplace Expertise"}
            text={
              "Our experienced account managers eat, sleep and breathe ecommerce. With knowledge from Amazon and Walmart, to digital media and display advertising, our team utilizes their expertise to drive your business performance."
            }
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-10 max-w-[1100px] m-auto mt-10 p-20 bg-blue-gradient w-full h-auto rounded-lg">
        <div className="w-full h-[300px] relative">
          <Image className="rounded-lg" src={"/Dominate.png"} layout="fill" />
        </div>
        <div className="gap-4 flex flex-col text-center sm:text-left">
          <h1 className="font-bold font-mont text-white text-xl">
            Customer Case Study
          </h1>
          <h1 className="font-bold font-mont text-white text-4xl">
            NutriBullet grows sales by +24.9% while reducing ad spend and ACOS
          </h1>
          <p className="  font-mont text-white text-normal opacity-80">
            NutriBullet enlists Teikametrics technology & AI-enabled analysts to
            prove incremental lift & increase Amazon sales
          </p>
          <span className="flex items-center gap-3 m-auto sm:m-0">
            <Link
              href={"/overview"}
              className="border-b-2 border-dashed pb-3 text-white font-mont font-bold"
              onMouseEnter={() => setIconHovered(true)}
              onMouseLeave={() => setIconHovered(false)}
            >
              Read the case study
            </Link>
            <div
              className={` pb-3 ${
                IconHovered
                  ? "translate-x-2 transition ease-out delay-75"
                  : "transition ease-in delay-75"
              }`}
            >
              <FaArrowRightLong color="white" />
            </div>
          </span>
        </div>
      </div>

      <div className="max-w-[1100px] mt-20 m-auto p-5 ">
        <div className="text-center">
          <h1 className="mb-4 font-bold font-mont text-xl bg-text2-gradient bg-clip-text text-transparent inline-block">
            Ad Management Services Features
          </h1>
        </div>

        <h1 className="text-center font-bold font-mont text-5xl  ">
          The services you need to exceed your goals
        </h1>

        <div className="flex mt-10 flex-col sm:flex-row items-start gap-10">
          <OverviewCards
            hasImage={false}
            heading={"PPC & Search Expertise"}
            text={
              "Our expert ad managers optimize your ads leveraging years of marketing and search expertise. Our proven methodologies create long-lasting, tangible performance gains. "
            }
          />
          <OverviewCards
            hasImage={false}
            heading={"Product-First Campaign Creation"}
            text={
              "Build campaigns around individual SKU goals. Whether you’re launching a new product or growing mature products, we’ve got the campaign strategy to meet your goals."
            }
          />
          <OverviewCards
            hasImage={false}
            heading={"New Customer Acquisition"}
            text={
              "Our methodology includes custom campaign structures built to target brand, competitor and generic keywords to keep existing customers and acquire new ones."
            }
          />
        </div>
        <div className="flex mt-10 flex-col sm:flex-row items-start gap-10">
          <OverviewCards
            hasImage={false}
            heading={"Algorithmic Keyword Bidding"}
            text={
              "Teikametrics best-in-class AI models leverage your product lifecycle, conversion rates, sales, and price changes to set the perfect bid, day and night."
            }
          />
          <OverviewCards
            hasImage={false}
            heading={"Keyword Research & Harvesting"}
            text={
              "Using custom thresholds, we’ll add new, high potential keywords while removing underperformers, so you’re always capturing market share and reducing inefficiencies."
            }
          />
          <OverviewCards
            hasImage={false}
            heading={"Business Performance Insights"}
            text={
              "With weekly reporting updates, monthly check-in reviews, and on-demand access to the Flywheel platform, you’ll have a constant pulse on your business performance."
            }
          />
        </div>
      </div>

      <div className="max-w-[1100px] m-auto flex flex-col-reverse gap-5 sm:flex-row p-5 items-center justify-between mt-20">
        <div className="w-full sm:w-[700px]  h-[200px] sm:h-[300px]  relative">
          <Image src={"/Dominate.png"} layout="fill" />
        </div>

        <div className="flex flex-col text-center sm:text-left  items-start gap-5">
          <h1 className=" text-xl font-bold font-mont bg-text2-gradient bg-clip-text text-transparent inline-block">
            Combine human intelligence with powerful technology
          </h1>
          <h1 className="text-2xl font-mont font-bold">
            AI-powered tech & market expertise is our secret sauce
          </h1>
          <p className="font-normal font-mont">
            Our experts leverage the Teikametrics Flywheel AI technology to
            drive sales growth and ad efficiency beyond human capabilities.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center sm:items-start flex-col sm:flex-row gap-3">
              <Image
                className="mt-1"
                src={"/download.svg"}
                height={15}
                width={15}
              />
              <p className="font-mont  font-semibold">
                Automated keyword actions optimized to audience-type and
                campaign efficiency targets
              </p>
            </div>
            <div className="flex items-center sm:items-start flex-col sm:flex-row gap-3">
              <Image
                className="mt-1"
                src={"/download.svg"}
                height={15}
                width={15}
              />
              <p className="font-mont  font-semibold">
                Algorithmic hourly bidding to capture sales at the best price
                possible, at any time of day{" "}
              </p>
            </div>
            <div className="flex items-center sm:items-start flex-col sm:flex-row gap-3">
              <Image
                className="mt-1"
                src={"/download.svg"}
                height={15}
                width={15}
              />
              <p className="font-mont  font-semibold">
                Goal-based campaign creation targeted at product launch, growth,
                and profitability objectives
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px]  mt-20 grid grid-cols-1 sm:grid-cols-5   gap-10 rounded-lg m-5 sm:m-auto bg-blue-gradient  ">
        <div className="relative w-full sm:w-auto h-[400px] sm:h-auto col-span-1 sm:col-span-2   ">
          <Image
            src={"/furniture.png"}
            className="rounded-t-lg sm:rounded-l-lg"
            layout="fill"
           />
        </div>
        <div className="col-span-1  sm:col-span-3 p-5">
          <Image
            src={"/Dominate.png"}
            height={50}
            width={50}
            className="sm:mb-5 sm:m-0 mb-5  m-auto  "
          />
          <h1 className="text-white  sm:text-left text-center font-mont font-bold text-3xl line leading-10 ">
            Extremely happy with the Walmart managed services and will recommend
            to everyone to use Teikametrics if you really want to achieve more
            success in your business.
          </h1>
          <div className="flex items-center gap-5 sm:items-end justify-between flex-col sm:flex-row">
            <div className="mt-10">
              <h1 className="text-white font-mont sm:text-left text-center font-bold">Tamia Jin</h1>
              <p className="text-white font-mont sm:text-left  text-center">Senior Manager, GoPlus</p>
            </div>
            <span className="flex items-center gap-3 m-auto sm:m-0">
              <Link
                href={"/overview"}
                className="  text-white font-mont font-bold"
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
              >
                Read the case study
              </Link>
              <div
                className={`  ${
                  IconHovered
                    ? "translate-x-2 transition ease-out delay-75"
                    : "transition ease-in delay-75"
                }`}
              >
                <FaArrowRightLong color="white" />
              </div>
            </span>
          </div>
        </div>
      </div>

      <div>
        <h1 className="mt-20 font-bold text-5xl text-center">Case Studies</h1>
      </div>

      <Banner
        heading={"Connect with our team"}
        subHeading={"Maximize your marketplace potential"}
      />
    </>
  );
};

export default page;
