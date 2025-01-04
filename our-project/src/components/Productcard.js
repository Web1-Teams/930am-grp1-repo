import React from 'react';

import React from 'react';

const ProductCard = ({ product }) => {
    const isOnSale = product.salePrice !== undefined && product.salePrice !== null;

    return (
        <div className="p-5 bg-blue-100 shadow-lg rounded-lg">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto rounded-lg mb-4"
            />
            <h1 className="text-xl font-bold text-blue-950 mb-2">{product.title}</h1>
            <p className="text-black-700 text-lg leading-relaxed">{product.description}</p>
            <div className="flex flex-col justify-between items-start mt-6">
                <span className="text-black text-2xl font-bold mb-1">{product.price}</span>
                <span className="text-gray-400 line-through">{product.oldPrice}</span>
        <div className="p-3 bg-blue-100 shadow-lg rounded-lg w-72">
            <div className="flex justify-center mb-1.5">
                <img
                    src={product.image["1"]} 
                    alt={product.name}
                    className="w-full h-auto rounded-lg"
                />
            </div>
            <h1 className="text-lg font-bold text-blue-900 mb-2">{product.name}</h1>
            <p className="text-blue-950 text-sm leading-relaxed ">{product.description}</p>
           
            <div className="flex flex-col justify-between items-start mt-2">
                {isOnSale ? (
                    <>
                        <span className="text-red-500 text-xl font-bold mb-1">
                        ₪{product.salePrice}
                        </span>
                        <span className="text-gray-400 line-through">
                        ₪{product.price}
                        </span>
                    </>
                ) : (
                    <span className="text-blue-900 text-xl font-bold mb-1">
                        ₪{product.price}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProductCard;