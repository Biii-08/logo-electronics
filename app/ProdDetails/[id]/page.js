
import ProductDetails from '@/app/modules/proddetails/Productdetail';
import React from 'react';



const Page = ({ params }) => {
    const productId = params.id;

    return (
        <div className="bg-[#380D41]">
            <ProductDetails productId={productId} />
        </div>
    );
};

export default Page;
