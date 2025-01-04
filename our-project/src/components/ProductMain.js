import React from 'react';
import ProductHeader from './ProductHeader.js';
import ProductImages from './ProductImages.js';
import ProductDetails from './ProductMain';
import ProductSpecifications from './ProductSpecifications';

const Product = ({
  title,
  price,
  mainImage,
  images = [],
  link,
  specifications = [],
  features = [],
}) => {
  return (
    <div className="bg-blue-200 text-blue-950 min-h-screen flex flex-col">
      <div className="container mx-auto p-6 flex-grow">
        <ProductHeader title={title} price={price} mainImage={mainImage} />
        <ProductImages title={title} images={images} />
        <ProductDetails link={link} />
      </div>
      <ProductSpecifications specifications={specifications} features={features} />
    </div>
  );
};

export default Product;
