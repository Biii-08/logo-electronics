"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import Link from 'next/link';
import './product.css';
import Image from 'next/image';

const Product = ({ selectedCategory, filterCategories }) => {

        const [products, setProducts] = useState([]);

        const filterData = products.filter(product => {
            return (
                product.category.includes(filterCategories)
            )
        })


        console.log(filterData)

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
            fetchProducts();
        }, [selectedCategory,]);

        const truncateText = (text, maxLength) => {
            if (text.length <= maxLength) {
                return text;
            }
            return text.substr(0, maxLength) + '...';
        };

        const fetchProducts = async () => {
            try {
                    const response = await axios.get('https://dummyjson.com/products');
                    const allProducts = response.data.products;

                if (selectedCategory) {
                    const filteredProducts = allProducts.filter((product) => product.category === selectedCategory);
                    setProducts(filteredProducts);

                } else {
                    setProducts(allProducts);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

    return (

        <div id='rubi' className="flex flex-col items-center">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-20 gap-16">
                 {filterData.length > 0 ? (

                     filterData.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-[36px] shadow-md boxy p-4 sm:w-w-[325px]] sm:h-[444px] md:w-[397.01px] md:h-[542.7px] w-[325px] h-[444px] "
                        >
                            <div className="absolute font-medium text-[17px] sm:text-[21px] mt-6 ml-6  gradient-text">
                                <p>{product.brand}</p>
                            </div>

                            {/* heart */}
                            <div
                                className="flex justify-end cursor-pointer mt-4 mr-2"
                                onClick={() => handleHeartClick(product.id)}
                            >
                                {product.isHearted ? (
                                    <AiFillHeart size={35} color='red' />
                                ) : (
                                    <AiOutlineHeart size={35} />
                                )}
                            </div>

                            <div className="text-center " id="product">
                            
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

               

                                    {/* view button */}
                                <div className="button-container ">
                                                    
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

