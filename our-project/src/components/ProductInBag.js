import React from 'react';

const  Product= ({ name, price }) => {

  return (
    <div className="flex items-center bg-blue-300 rounded-lg p-1 m-1 shadow">
      {/* Product Image */}
      <img src="#"
        alt="Product"
        className="w-32 h-auto rounded-lg"/>

      {/* Product Details */}
      <div className="flex-grow px-2 text-left font-bold text-lg items-start">
        <h2 className="mb-2">{name}</h2>
        <p>Price: ₪{price}</p>
        <div className="quantity  mt-1 space-x-2 text-lg">
          <button
            className="px-3 py-1 hover:bg-blue-950 bg-blue-900 text-white rounded-lg" >  -
          </button>
          <input
            type="text" className="w-12 text-center border border-gray-300 rounded-lg" readOnly />
          <button
            className="px-3 py-1 hover:bg-blue-950 bg-blue-900 text-white rounded-lg"
       
          >
            +
          </button>
        </div>
       </div>

       {/* sub total for each product */}
       <p className="flex-grow px-2 text-left font-bold text-lg items-start">Sub-total: ₪{ }</p>
      {/* Remove Button */}
      <button className="bg-red-500 text-white px-2 py-2 mr-1 font-bold rounded-lg hover:bg-red-600">
        Remove
      </button>

    </div>
  );
}

export default Product;
