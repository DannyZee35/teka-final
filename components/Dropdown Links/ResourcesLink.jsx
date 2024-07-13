


"use client";

import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState,useRef} from "react";

const ResourcesLink = () => {
    const [isCompanyDropdownOpen, setCompanyDropdownOpen] = useState(false);
    const [companyIconHover, setCompanyIconHover] = useState(false);
    const dropdownRef = useRef(null);
    const [BlogIconHovered, setBlogIconHovered] = useState(false);
    const [NewsIconHovered, setNewsIconHovered] = useState(false);

    const handleCompanyMouseEnter = () => {
      setCompanyDropdownOpen(true);
    };
  
    const handleCompanyMouseLeave = () => {
      setCompanyDropdownOpen(false);
    };
  return (
    <div className="relative group pb-4" onMouseEnter={handleCompanyMouseEnter} onMouseLeave={handleCompanyMouseLeave}>
    <span className="flex items-center gap-3">
      <Link href={"/"} 
        onMouseEnter={() => setCompanyIconHover(true)}
        onMouseLeave={() => setCompanyIconHover(false)}
      >Resources</Link>
      <div className={`${companyIconHover ? '-rotate-180 transition delay-75 ease-in-out' : 'transition delay-75 ease-in-out'}`}>
        <IoIosArrowDown />
      </div>
    </span>

    {isCompanyDropdownOpen && (
      <div ref={dropdownRef} className="absolute mt-4 bg-white text-black border p-10 w-[800px] border-gray-300 rounded-md block left-1/4 transform -translate-x-1/4">
        {/* Content for the companies dropdown */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2 font-semibold text-2xl ">
            Resources Overview
            </h1>
            <p className="font-normal">
              Learn more about our company and its mission
            </p>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-3">
              <Link href={"/blogs"} onMouseEnter={() => setBlogIconHovered(true)} onMouseLeave={() => setBlogIconHovered(false)}>Blog</Link>
              <div className={`${BlogIconHovered ? 'translate-x-2 transition ease-out delay-75' : 'transition ease-in delay-75'}`}>
                <FaArrowRightLong />
              </div>
            </span>
            <span className="flex items-center gap-3">
              <Link href={"/company-info"} onMouseEnter={() => setNewsIconHovered(true)} onMouseLeave={() => setNewsIconHovered(false)}>Newsletter</Link>
              <div className={`${NewsIconHovered ? 'translate-x-2 transition ease-out delay-75' : 'transition ease-in delay-75'}`}>
                <FaArrowRightLong />
              </div>
            </span>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default ResourcesLink