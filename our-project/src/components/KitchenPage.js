import React from 'react';
import ProductCard from './ProductCard';

const KitchenPage = () => {
  const products = [
    {
      id: 1,
      name: 'LG Dishwasher Built In',
      price: 2500,
      image: './1-product.jpg',
    },
    {
      id: 2,
      name: 'Refrigerator',
      price: 2000,
      image: './2-product.jpg',
    },
    {
      id: 3,
      name: 'Washing Machine',
      price: 2700,
      image: './3-product.jpg',
    },
    {
      id: 4,
      name: 'TV',
      price: 3000,
      image: './4-product.jpg',
    },
    {
      id: 5,
      name: 'PS5 Pro',
      price: 2800,
      image: './5-product.webp',
    },
    {
      id: 6,
      name: 'Air Conditioner',
      price: 3200,
      image: './6-product.jpg',
    },
  ];

  return (
    <div className="bg-blue-300 font-sans text-blue-950 min-h-screen p-6">
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KitchenPage;