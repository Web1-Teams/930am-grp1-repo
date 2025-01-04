import React from 'react';

const ProductImages = ({ title, images }) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${title} view ${index + 1}`}
          className="w-20 h-20 rounded-lg"
        />
      ))}
    </div>
  );
};

export default ProductImages;
