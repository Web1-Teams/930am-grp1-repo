import React from 'react';

const ProductHeader = ({ title, price, mainImage }) => {
  return (
    <div className="product bg-blue-200 shadow-md rounded-lg p-4 text-center relative">
      <span className="absolute top-2 left-2 text-yellow-500 font-bold text-lg">${price}</span>
      <img
        src={mainImage}
        alt={`${title}`}
        className="w-full max-w-[200px] mx-auto rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
    </div>
  );
};

export default ProductHeader;
