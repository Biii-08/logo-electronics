import React from 'react';
import './card.css'

const DetailCard = ({ image }) => {
  return (
    <div id="detail-card" className="flex space-x-4 sm:mt-[200px] gap-[10px] sm:gap-[50px] left-1/2 transform -translate-x-1  overflow-hidden">
      {image.map((images, index) => (
        <div key={index} className="sm:w-[300px] w-[220px] sm:h-[391px] h-[300.55px] bg-white p-6 shadow-md border-4 gradient-border">
          <img src={images} alt="" className="w-full h-full object-cover object-center" />
        </div>
      ))}
    </div>
  );
};

export default DetailCard;
