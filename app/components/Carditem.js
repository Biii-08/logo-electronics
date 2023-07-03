"use client"
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './card.css';
import axios from 'axios';
import Image from 'next/image'

const CardItem = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/');
            setProducts(response.data.products.slice(6, 10));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    const handleLeftArrowClick = () => {
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        const productToMove = updatedProducts.pop();
        updatedProducts.unshift(productToMove);
        return updatedProducts;
      });
    };
  
    const handleRightArrowClick = () => {
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        const productToMove = updatedProducts.shift();
        updatedProducts.push(productToMove);
        return updatedProducts;
      });
    };
  
    

    return (
        <div id="card" className="w-full bg-[#380D41] absolute ">
            {products.length > 0 ? (
                <div className=" absolute  bottom-0 left-1/2 transform -translate-x-1/2 sm:translate-y-1/2 -translate-y-16  overflow-hidden ">
                <div className="flex space-x-4 sm:gap-[100px]  gap-[10px]">
                        {products.map((product, index) => (
                            <Card
                                key={index}
                                productId={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <p className='text-white'>Loading</p>
            )}
            <div className='md:mt-0 mt-[270px]   image flex'>
            <Image
          src="/assets/images/arrow.png"
          loading="lazy"
          className="cursor-pointer flex-shrink-0"
          width={46.97}
          height={46.97}
          onClick={handleLeftArrowClick}
        />
        <Image
          src="/assets/images/Vector.png"
          className="absolute right-0 mr-[117px] cursor-pointer flex flex-shrink-0"
          width={46.97}
          height={46.97}
          onClick={handleRightArrowClick}
        />
            </div>
        </div>
    );
};

export default CardItem;
   