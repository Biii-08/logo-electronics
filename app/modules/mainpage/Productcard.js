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

  const handleHeartClick = (productId) => {
    setProducts((prevProducts) =>
        prevProducts.map((product) => {
            if (product.id === productId) {
                return {
                    ...product,
                    isHearted: !product.isHearted,
                };
            }
            return product;
        })
    );
};
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
      <h1 className="sm:text-[60px] text-[40px] font-routhem font-bold sm:mt-[434px] mt-[450px] mb-12 text-wrapper">Products</h1>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-25 sm:gap-20 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[36px] shadow-md boxy p-4 sm:w-w-[325px]] sm:h-[444px] md:w-[397.01px] md:h-[542.7px] w-[325px] h-[444px] "
            >
                  <div  className="absolute font-medium sm:text-[15px] ml-[25px] md:text-[21px] text-[15px] sm:mt-4 mt-2  gradient-text">
                <p>{product.brand}</p>
              </div>

              <div
               className="flex justify-end cursor-pointer  mt-2 sm:mt-4 mr-2"
                 onClick={() => handleHeartClick(product.id)}
                            >
                  {product.isHearted ? (
                    <AiFillHeart size={35} color='red' />
                      ) : (
                      <AiOutlineHeart size={35} />
                       )}
                     </div>
              <div className="text-center" id="product">
                <div className="flex justify-center mt-6 items-center">
                  <img
                    src={product.thumbnail}
                    alt=""
                    className="md:w-[300px] sm:w-[250px]  w-[250px] md:h-[189px] sm:h-[150px] h-[150px]  transition-all duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
                <h2 className="text-[29.85px]   ml-0 font-400 sm:mt-8  mt-6 text-black">
                  {truncateText(product.title, 15)}
                </h2>

                <Link href={`/ProdDetails/${product.id}`} className='flex justify-center'>
                   <button className='text-left sm:text-[20px] px-10 gradientLink flex font-routhem tracking-widest mt-8 uppercase justify-between items-center '>
                        <div className='gradientLinkOverlay'>
                        </div>

                       <span className='text-[20px] sm:text-[25px] font-semibold ml-8'>View </span>
                        <BsArrowRightCircle size={47} className='w-[32px] h-[32px] md:w-[46.97px] md:h-[46.97px] ml-[46px] absolute top-[50%] -translate-y-1/2 right-8' />

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
