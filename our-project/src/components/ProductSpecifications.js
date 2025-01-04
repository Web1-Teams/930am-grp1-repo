import React from 'react';

const ProductSpecifications = ({ specifications, features }) => {
  return (
    <div className="mt-8 bg-blue-200 p-6 rounded-lg shadow-lg">
      <h1 className="text-blue-950 text-2xl font-bold mb-4">Specifications</h1>
      <ul className="text-blue-950 text-lg font-medium list-disc pl-6 mb-6">
        {specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <h2 className="text-blue-950 text-2xl font-bold mb-4">Technologies & Features</h2>
      <ul className="text-blue-950 text-lg font-medium list-disc pl-6">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSpecifications;
