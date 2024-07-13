import Link from "next/link";
import Button from "./Button";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import useMediaQuery from "@hooks/useMediaQuery";
import { Pivot as Hamburger } from 'hamburger-react'
import CompaniesLink from "./Dropdown Links/CompaniesLink";
import ResourcesLink from "./Dropdown Links/ResourcesLink";
import ServicesLink from "./Dropdown Links/ServicesLink";
import TestimonialsLink from "./Dropdown Links/TestimonialsLink";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const router = useRouter();
  const [isHome, setIsHome] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [navScrolled, setNavScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsHome(router.pathname === "/home");
  }, [router.pathname]);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setNavScrolled(scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <div className={`p-4 flex items-end justify-between z-50 w-full fixed top-0 ${isHome ? 'bg-transparent' : 'bg-black'}`}>
            <Hamburger
              color={navScrolled ? 'white' : 'white'}
              toggled={isOpen}
              toggle={setOpen}
              duration={0.8}
            />
          </div>
          {isOpen && (
            <div className="fixed top-20 w-screen h-auto bg-white z-50">
              <MobileMenu />
            </div>
          )}
        </>
      ) : (
        <>
          <nav className={`flex items-center justify-between p-5 font-mont font-semibold ${isHome ? "text-white" : "text-black"}`}>
            <div className="pb-4">
              <Link href={"/"}>tekametrics</Link>
            </div>
            <div className="flex gap-10">
              <Link onClick={() => setIsHome(true)} href={"/"}>Home</Link>
              <ServicesLink OverviewClick={() => setIsHome(false)} />
              <CompaniesLink AboutClick={() => setIsHome(false)} />
              <ResourcesLink />
              <TestimonialsLink />
            </div>
            <div className="pb-4">
              <Button
               backgroundColor={isHome ? "bg-white" : "bg-black"} 
               color={isHome ? 'text-black' : 'text-white'} 
               text={"Get Free Audit"} 
               icon={<IoIosArrowForward />} 
               onClick={()=>router.push('/request-demo')}

               />
            </div>
          </nav>
        </>
      )}
    </>
  );
}
