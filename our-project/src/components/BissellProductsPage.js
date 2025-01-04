import React from 'react';
import ProductCard from './ProductCard'; 

const BissellProductsPage = ({ products }) => {
    const BissellProducts = products.filter(
        product => !product.salePrice && product.brand === 'Bissell'
    );


    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-950 mb-6">Bissell Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {BissellProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default BissellProductsPage;
