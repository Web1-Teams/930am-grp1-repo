import React from 'react';
import ProductCard from './Productcard'; // Ensure this is correctly imported
import data from './data.js';
const LG = () => {
    const LGProducts = data.filter(product =>
        product.brand === 'LG' &&!product.salePrice
    );
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-950 mb-6">LG </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {LGProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default LG;