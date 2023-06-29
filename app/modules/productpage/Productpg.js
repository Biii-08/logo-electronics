"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineHeart } from 'react-icons/ai';
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

        <div id='rubi' className="flex flex-col items-center mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
                {filterData.length > 0 ? (

                    filterData.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-[36px] shadow-md boxy p-4 sm:w-[250px] sm:h-[400px] md:w-[350px] md:h-[542px] w-[250px] h-[350px] mb-40"
                        >
                            <div className="absolute font-medium text-[17px] sm:text-[21px] mt-6 ml-6  gradient-text">
                                <p>{product.brand}</p>
                            </div>
                            <div className="flex justify-end cursor-pointer mt-4 mr-2">
                                <AiOutlineHeart size={35} />
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
                                <div className="button-container">
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

