import React from 'react';

const ProductDetails = ({ link }) => {
  return (
    <a
      href={link}
      className="block w-full mt-4 text-center bg-blue-300 hover:bg-blue-400 text-blue-950 font-bold py-2 px-4 rounded-full"
    >
      Shopping Bag
    </a>
  );
};

export default ProductDetails;
