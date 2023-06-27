'use client'
import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import Link from 'next/link';
import axios from 'axios';
import './card.css';

const ProductItem = () => {
  const [isFilled, setIsFilled] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    } catch (error) {
      console.log('error ayo', error);
    }
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div id='rubi' className='card-container'>
      {products.map((product) => (
        <div
          key={product.id}
          className='bg-white rounded-[36px] shadow-md p-4 w-[397px] h-[542px] mb-40'
        >
          <div className='goldtext absolute font-medium text-[21px] mt-4 ml-4 gradient-text'>
            <p>{product.brand}</p>
          </div>

          <div className='flex justify-end cursor-pointer mt-4'>
            {isFilled ? (
              <AiFillHeart
                size={35}
                style={{ color: 'red' }}
                onClick={handleClick}
              />
            ) : (
              <AiOutlineHeart
                size={35}
                style={{ color: 'black' }}
                onClick={handleClick}
              />
            )}
          </div>
          <div className='text-center mt-10' id='product'>
            <div className='flex justify-center items-center'>
              <img
                src={product.thumbnail}
                alt=''
                className='w-[311px] h-[189px] transition-all duration-300 ease-in-out transform hover:scale-105'
              />
            </div>
            <h2 className='text-[32px] w-[312px] h-[55px] font-regular  text-black mt-10'>
              {truncateText(product.title, 15)}
            </h2>
            <div className='button-container flex'>
              <Link href='/ProdDetails'>
                <button className='uppercase  text-[25px] rounded-full py-2 px-10 mt-9 mr-[51px] transition-all duration-300 ease-in-out sm:w-[340px]  w-[250px] h-[86px] text-black flex justify-center items-center'>
                  View
                  <BsArrowRightCircle
                    size={47}
                    style={{ marginLeft: '51px' }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;

