'use client'
import React from 'react';
import Image from 'next/image';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './footer.css';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const Footer = () => {
  return (
    <div className="bg-[#380D41]">
      <div
        className="flex flex-col md:flex-row md:justify-between text-white p-10 mt-60 relative background ">

          <div className="flex items-center md:w-1/4">
            <div className="flex flex-col ml-[30px] sm:ml-[75px] md:ml-1">
              <Image
                src="/image/navlogo.png"
                alt="Logo"
                width={139}
                height={64}
                className="leading-[63.98px] mx-auto sm:ml-[35.16px]"
              />
               <p className="font-regular text-lg ml-4 sm:w-[412.8px] w-[283px] h-[135px] mt-[35.16px] sm:text-center">
                            LOGO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                            standard dummy text ever since the 1500s, when
                        </p>
                    </div>
                </div>

          <div className="flex items-center justify-center mt-[100px] md:mt-0 md:w-1/4">
                    <div id="links" className="text-center right-[44.83%] tracking-widest uppercase">
                        <h1 className="font-bold mb-2 gradient-text leading-[30px] text-[25px] font-routhem">Useful Links</h1>
                        <a href="/" className="block mb-1">
                            Home
                        </a>
                        <a href="/" className="block mb-1">
                            Product
                        </a>
                        <a href="/" className="block mb-1">
                            About Us
                        </a>
                        <a href="/" className="block mb-1">
                            Contact Us
                        </a>
                    </div>
                </div>

            <div className="social-media-icons ">
              <div className=" absolute right-[0%] mr-5 ">
                <h1 className=" text-2xl md:text-4xl lg:text-4xl mb-6 font-routhem uppercase tracking widest text-white">Follow Us on</h1>
                <div className="flex space-x-2 items-center justify-center">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <BsFacebook className="text-white text-3xl md:text-4xl lg:text-5xl" />
                  </a>
                  <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterCircle className="text-white text-3xl md:text-4xl lg:text-5xl" />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className="text-white text-3xl md:text-4xl lg:text-5xl" />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <BsYoutube className="text-white text-4xl md:text-5xl lg:text-6xl"/>
                  </a>
                </div>
              </div>
            </div>
          
        

        <a href="#" onClick={scrollToTop} className="cursor-pointer">
          <Image src="/image/rocket.png" alt="Scroll to top" className="right-0 absolute top-0" width={108} height={184} />
        </a>
      </div>

      <div className="text-center mt-8">
        <p className="p-[39px] font-semibold text-white">COPYRIGHT 2021 lOGO ALL RIGHT RESERVED</p>
      </div>
  );
};

export default Footer;
