

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-blue-200 border-gray-300 rounded-lg shadow-md w-72 overflow-hidden transform transition-transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-auto border-b border-gray-300" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-lg font-semibold text-blue-800">₪ {product.price}</p>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-600 transition">
          Add to Shopping Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
