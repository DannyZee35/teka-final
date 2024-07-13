import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";


const MobileMenu = () => {
  const router = useRouter()
  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/",
      subLabels: ["Ad Management Overview"],
      subRoutes: ["/overview"],
      state: "serviceOpen",
    },
    {
      label: "Companies",
      href: "/",
      subLabels: ["About Us", "Contact Us"],
      subRoutes: ["/about", "/contact-us"],
      state: "companyOpen",
    },
    {
      label: "Resources",
      href: "/",
      subLabels: ["Blogs", "Newsletter"],
      subRoutes: ["/blogs", "/newsletter"],
      state: "resourcesOpen",
    },
    {
      label: "Testimonials",
      href: "/",
      subLabels: ["Case Study"],
      subRoutes: ["/cases"],
      state: "caseOpen",
    },
  ];

  const [menuStates, setMenuStates] = useState({
    serviceOpen: false,
    companyOpen: false,
    resourcesOpen: false,
    caseOpen: false,
  });

  const handleItemClick = (state) => {
    // Close other submenus
    const updatedStates = Object.keys(menuStates).reduce((acc, key) => {
      acc[key] = key === state ? !menuStates[key] : false;
      return acc;
    }, {});

    setMenuStates({ ...menuStates, ...updatedStates });
  };

  return (
    <div className="flex flex-col gap-3 mt-5 bg-white text-black font-bold font-mont p-5">
      {menuItems.map((item, index) => (
        <div key={index}>
          <Link href={item.href} onClick={() => handleItemClick(item.state)}>
            {item.label}
          </Link>
          {item.subLabels && (
            <div
              className={`flex flex-col gap-2 ${
                menuStates[item.state] ? "block" : "hidden"
              }`}
            >
              {item.subLabels.map((subLabel, subIndex) => (
                <Link
                  key={subIndex}
                  href={item.subRoutes[subIndex]}
                  className="font-normal"
                >
                  {subLabel}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <Button
        backgroundColor={"bg-black"}
        color={"text-white"}
        text={"Get Free Audit"}
        onClick={() => router.push("/request-demo")}
        otherClasses={"text-center flex items-center justify-center"}
      />

      <Button
        backgroundColor="bg-transparent"
        color={"text-black"}
        text={"Contact Us"}
        onClick={() => router.push("/contact-us")}
      />
    </div>
  );
};

export default MobileMenu;
