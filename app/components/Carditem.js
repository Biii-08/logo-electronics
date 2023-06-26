'use client'
import React, { useState } from 'react';
import Card from './Card';
import './card.css';
import Image from 'next/image'

const CardItem = () => {
  
  const handleLeftArrowClick = () => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const cardToMove = updatedCards.pop();
      updatedCards.unshift(cardToMove);
      return updatedCards;
    });
  };

  const handleRightArrowClick = () => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const cardToMove = updatedCards.shift();
      updatedCards.push(cardToMove);
      return updatedCards;
    });
  };
  
  const [cards, setCards] = useState([
    {
      pname: 'Apple',
      imageSrc: 'image/apple.png',
      description: 'MacBook Pro 15-inch',
      price: '£350.00',
      size: 'w-[263px] h-[145px]   rounded-lg',
    },
    {
      pname: 'Keyboard',
      imageSrc: 'image/keyboard.png',
      description: 'AZERTY Keyboard',
      price: '£100.00',
      size: 'w-[215px] h-[119px]  rounded-lg',
    },
    {
      pname: 'Desktop',
      imageSrc: 'image/monitor.png',
      description: 'AZERTY Desktop',
      price: '£250.00',
      size: 'w-[180px] h-[163px]  rounded-lg',
    },
    {
      pname: 'Headphone',
      imageSrc: 'image/headphone.png',
      description: 'Wireless Headphone',
      price: '£50.00',
      size: 'w-[141px] h-[166px]   rounded-lg',
    },
  ]);

  return (
    <div id='card' className='w-full p-20 bg-[#380D41] '>

     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:translate-y-1/2 -translate-y-1/2 overflow-hidden">

    <div className="flex space-x-5 mt-[100px] sm:mt-[200px]  sm:space-x-[120px]">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  pname={card.pname}
                  imageSrc={card.imageSrc}
                  description={card.description}
                  price={card.price}
                  size={card.size}
                  
                />
              ))}
            </div>
          </div>
    <Image
            src='/image/arrow.png'
            loading='lazy'
            className=' cursor-pointer'
            width={46.97} 
            height={46.97} 
            onClick={handleLeftArrowClick}
          />
          <Image 
            src='/image/Vector.png'
            className='absolute right-0 mr-[117px] cursor-pointer flex flex-shrink-0 '
            width={46.97} 
            height={46.97} 
            onClick={handleRightArrowClick}
          />
        </div>
  );
};

export default CardItem;
