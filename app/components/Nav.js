'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';

const Nav = () => {
  const [navbar, setNav] = useState(false);
  const [navBg, setNavBg] = useState('#380D41');
  const [showContent, setShowContent] = useState(true);

  const handleNav = () => {
    setNav(!navbar);
    setShowContent(!navbar);
  };

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', navbar);
  }, [navbar]);

  return (
    <div style={{ backgroundColor: `${navBg}` }} className='flex justify-between items-center'>
      {/* web view navbar */}
      <div className='w-full h-[55px] md:h-[148px] flex justify-between overflow-hidden' style={{ boxShadow: '0px 4px 4px #ffffff40' }}>
        {/* logo */}
        <Link href='/'>
          <div className='leading-[63.98px] flex-start md:flex-start'>
            <Image src='/assets/images/navlogo.png' alt='Logo' width={139} height={64} className='leading-[63.98px] ml-8 mt-12  hidden sm:hidden md:block' />
          </div>
        </Link>

        {/* nav contents */}
        <div id='nav' className='hidden w-full md:block md:w-auto'>
          <ul className='font-medium flex flex-col p-4 md:p-2 mt-16 md:flex-row md:space-x-8'>
            <li className='text-[25px] leading-[38px] text-color font-semibold px-[25px] gradient-border rounded-full'>
              <Link href='/'>Home</Link>
            </li>
            <li className='text-[25px] text-color leading-[38px] font-semibold px-[25px] rounded-full gradient-border'>
              <Link href='/productpage'>Products</Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className='md:hidden p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
          <RiMenuUnfoldLine size={30} className='text-white' />
        </div>
      </div>

      {/* mobile view */}
      <div className={navbar ? 'md:hidden fixed left-0 top-0 w-full h-screen z-50 ' : ''}>
        {/* Side Drawer Menu */}
        <div
          className={
            navbar
              ? 'fixed left-0 top-0 w-full sm:w-full md:w-full h-screen bg-[#26072c] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/' className='smooth=(true) duration-500'></Link>
              <div onClick={handleNav} className=' p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <RiMenuFoldLine size={30} className='text-white ' />
              </div>
            </div>
            <div className='flex justify-center my-4 mt-[125px]'>
              <Image src='/assets/images/navlogo.png' alt='Logo' width={139} height={64} />
            </div>
          </div>
          <div id='nav' className='flex p-2 mt-[82px] flex-col'>
            <ul className='flex justify-center space-y-12'>
              <li onClick={() => setNav(false)} className='text-[25px] leading-[38px] px-[25px] fixed mb-[68px] text-color font-semibold gradient-border items-center rounded-full'>
                <Link href='/'>Home</Link>
              </li>
              <Link href='/productpage'>
                <li onClick={() => setNav(false)} className='text-[25px] leading-[38px] mt-[37px] text-color font-semibold px-[25px] gradient-border rounded-full'>
                  Products
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

