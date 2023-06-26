'use client';
import React, { useEffect, useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import './home.css';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const logoText = "Logo Electronics";

  return (
    <div className="w-screen relative flex justify-center items-center mt-1.5 bg-[#380D41]">
  {/* image */}
  <div className="image-wrapper w-screen h-[519px] sm:h-[839px]">
    <Image
      src="/image/logo.png"
      alt="homepage image"
      layout="fill"
      objectFit="cover"
      className="w-full h-full object-cover"
    />
  </div>

      {/* heading inside image */}
      <div id='main' className='absolute text-center'>
        <h1 className="text-[34px]  sm:text-[55px]  justify-center inline-flex items-center w-[342px] h-[73px] sm:w-[602px] sm:h-[129px] font-semibold text-[#F903AA]  font-routhem text-wrapper">
          {logoText.split('').map((letter, index) => (
            <span
              key={index}
              className={`logo-letter ${visible ? 'visible' : ''}`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <div className='flex justify-center items-center'>
          {/* horizontal lines */}
          <div className='flex-grow h-2 w-16 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 sm:w-24 rounded-full'></div>
          <p className='  mx-4 sm:text-[20px] text-[14px] font-routhem uppercase text-white tracking-widest'>
            The techies you love
          </p>
          {/* horizontal lines */}
          <div className='flex-grow h-2 w-16 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 sm:w-24 rounded-full'></div>
        </div>
        <div className="homepage-content flex items-center p-6 sm:mt-[74px]">
          <Link href='/productpage'>
            <button className='font-routhem text-left border-[5px] text-[12px] sm:text-[20px] rounded-full text-white hover:scale-105 tracking-widest px-10 sm:h-[82px] sm:w-[470px] h-[57px] w-[339px]  py-2 relative'>
              View All Products
              <BsArrowRightCircle size={47} className='w-[32.97px] h-[32.97px] sm:w-[46.97px] sm:h-[46.97px] flex flex-end absolute top-[50%] -translate-y-1/2 right-4' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
