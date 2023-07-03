"use client"
import React from 'react';
import { FaStar } from 'react-icons/fa';
import './card.css';

const Card = ({ product }) => {
      const { thumbnail, title, price, rating, stock } = product;
      const filledStars = Math.round(rating);

      return (
          <div id="card" className="w-[200px] sm:w-[300px] h-[255px] sm:h-[391px] bg-white p-6 shadow-md border-4 gradient-border">
                <img src={thumbnail} alt="Product Image" className="sm:w-[300px] sm:h-[150px] w-[100px] h-[50px] " />
                <p className="text-black font-semibold md:font-bold md:text-[25px] mt-4 ">{title}</p>
                <p className="text-black text-[12px] md:text-[25px] font-semibold mt-[10.85px]">${price}</p>
                <div className="flex text-[12px] md:text-[25px] items-center mb-4">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} color={index < filledStars ? '#ffc107' : '#c4c4c4'} />
                    ))}{' '}
                    <div className="ml-5 text-gray-500 text-[12px] md:text-[20px]">({stock})</div>
                </div>
          </div>
      );
};

export default Card;
