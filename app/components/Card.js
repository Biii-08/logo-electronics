import React from 'react'
import Image from 'next/image'
import './card.css'

const Card = ({ pname, imageSrc, description, price, size}) => {
  return (

    <div id='card' className="w-[300px] h-[391px] bg-white  p-6 shadow-md border-4 gradient-border ">
      <img
          src={imageSrc}
          alt="Product Image"
          className={size}
        
      />
      <p className=" text-black font-bold">{pname}</p>
      <p className="text-[#0A0A0A] mt-[8.6px]">{description}</p>
      <p className="text-purple-900 font-bold mt-[10.85px]">{price}</p>
   
    </div>
);
};
  
export default Card;