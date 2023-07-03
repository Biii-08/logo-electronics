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
    <div className=" relative flex justify-center items-center mt-0 bg-[#380D41]">
      {/* image */}
      <div className="image-wrapper  w-screen h-[519px] sm:h-[839px] ">
        <Image src="/image/logo.png" alt="homepage image" layout="fill"objectFit="cover" className="w-auto h-full object-cover"/>
      </div>

      {/* heading inside image */}
      <div id='main' className='absolute  sm:mt-[200px] top-[201px] justify-center transform -translate-y-1/2 text-center'>
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
            <div className=' h-2 w-12 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 sm:w-24 rounded-full lines overflow-hidden'></div>

            <p className='  mx-4 sm:text-[20px] text-[14px] font-routhem uppercase text-white tracking-widest'>
              The techies you love
            </p>

            {/* horizontal lines */}
            <div className=' h-2 w-12 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 sm:w-24 rounded-full lines  overflow-hidden'></div>
        </div>

        <div className="homepage-content flex items-center justify-center p-6 sm:mt-[74px]">
          
          <Link href='/productpage'>
            
            <button className='font-routhem text-left sm:text-[20px] text-[15px]  px-10 md:h-[82px] md:w-[483px] h-[57px] w-[339px] flex justify-center gradientButton'>
              <div className='gradientButtonOverlay'>

              </div>
              <span className='text-white hover:scale-105 duration-300 ease-in-out px-10'> View All Products</span>
                <BsArrowRightCircle size={47} className='w-[32px] h-[32px] sm:w-[46.97px] sm:h-[46.97px] ml-[46px] absolute top-[50%] -translate-y-1/2 right-4' />
            </button>
         
          </Link>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
