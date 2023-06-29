'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Link from 'next/link';
import { BsArrowRightCircle } from 'react-icons/bs';
import './home.css'

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isFilled, setIsFilled] = useState(false); // Add isFilled state

  useEffect(() => {
    // Fetch the product data when the component mounts
    fetchProducts();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

  const fetchProducts = async () => {
    try {
      // Make an HTTP GET request to the API endpoint
      const response = await axios.get('https://dummyjson.com/products');

      // Set the fetched product data in the state
      setProducts(response.data.products.slice(0, 6)); // Display only the first 6 products
    } catch (error) {
      // Handle error if request fails
      console.error('Error fetching products:', error);
    }
  };

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div id='rubi' className="flex flex-col items-center mt-8">
      <h1 className="sm:text-[60px] text-[30px] font-routhem font-bold sm:mt-[434px] mt-[50px] mb-12 text-wrapper">Products</h1>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-25 sm:gap-20 gap-1">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[36px] shadow-md boxy p-4 sm:w-[250px] sm:h-[400px] md:w-[350px] md:h-[542px] w-[250px] h-[350px] mb-40"
            >
                  <div  className="absolute font-medium sm:text-[15px] md:text-[21px] text-[15px] sm:mt-4 mt-2  gradient-text">
                <p>{product.brand}</p>
              </div>

              <div className="flex justify-end cursor-pointer mt-4">
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
              <div className="text-center md:mt-10 sm:mt-1" id="product">
                <div className="flex justify-center items-center">
                  <img
                    src={product.thumbnail}
                    alt=""
                    className="md:w-[300px] sm:w-[250px]  w-[250px] md:h-[189px] sm:h-[150px] h-[150px]  transition-all duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
                <h2 className="md:text-[34px] sm:text-[29px] w-[312px] h-[55px] font-regular sm:mt-4  text-black">
                  {truncateText(product.title, 15)}
                </h2>

                <Link href={`/ProdDetails/${product.id}`}>
                  <button className="uppercase  text-[20px] sm:text-[25px] font-semibold text-black h-[70px] md:h-[86px] sm:h-[75px] rounded-full py-2 px-10 sm:mt-1 md:mt-9 md:w-[300px] sm:w-[220px] w-[220px] transition-all duration-300 ease-in-out flex justify-between items-center ">
                    View
                    <BsArrowRightCircle
                      size={40}
                      style={{ marginLeft: '51px' }}
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className='text-white'>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Product;
