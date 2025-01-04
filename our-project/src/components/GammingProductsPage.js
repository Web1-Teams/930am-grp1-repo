import React from 'react';
import ProductCard from './ProductCard';
const GamingProductsPage = ({ products }) => {
    const gamingProducts = products.filter( product => !product.salePrice && product.category === 'Gaming');
     return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-950 mb-6">Gaming Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {gamingProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default GamingProductsPage;

