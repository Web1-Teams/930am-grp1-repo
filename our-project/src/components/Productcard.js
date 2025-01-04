import React from 'react';

const ProductCard = ({ product }) => {
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
            </div>
        </div>
    );
};

export default ProductCard;