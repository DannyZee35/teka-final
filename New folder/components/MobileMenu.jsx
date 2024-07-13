import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
  const menuItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/',
      subLabels: ['Ad Management Overview'],
      subRoutes: ['/overview'],
      state: 'serviceOpen',
    },
    {
      label: 'Companies',
      href: '/',
      subLabels: ['About Us', 'Contact Us'],
      subRoutes: ['/about-us', '/contact-us'],
      state: 'companyOpen',
    },
    {
      label: 'Resources',
      href: '/',
      subLabels: ['Blogs', 'Newsletter'],
      subRoutes: ['/blogs', '/newsletter'],
      state: 'resourcesOpen',
    },
    {
      label: 'Testimonials',
      href: '/',
      subLabels: ['Case Study'],
      subRoutes: ['/cases'],
      state: 'caseOpen',
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
    <div className='flex flex-col gap-3 mt-5 bg-white text-black font-bold font-mont p-5'>
      {menuItems.map((item, index) => (
        <div key={index}>
          <Link href={item.href} onClick={() => handleItemClick(item.state)}>
            {item.label}
          </Link>
          {item.subLabels && (
            <div className={`flex flex-col gap-2 ${menuStates[item.state] ? 'block' : 'hidden'}`}>
              {item.subLabels.map((subLabel, subIndex) => (
                <Link key={subIndex} href={item.subRoutes[subIndex]} className='font-normal'>
                  {subLabel}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
