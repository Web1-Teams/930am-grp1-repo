import React, { useState } from 'react';

// Component: Card to display product details
const ProductCard = ({ product }) => {
    // State to track if the product is added to the shopping cart
    const [inCart, setInCart] = useState(false);

    // Function to add the product to the cart
    const handleAddToCart = () => {
        setInCart(true); // Update state to indicate the product is added
        alert(product.title + " has been added to your shopping bag!"); // Show a message to the user
    };

    return (
        <div className="p-5 bg-blue-100 shadow-lg rounded-lg">
            {/* Product image */}
            <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto rounded-lg mb-4" 
            />
            
            {/* Product title */}
            <h1 className="text-xl font-bold text-blue-950 mb-2">
                {product.title}
            </h1>
            
            {/* Product description */}
            <p className="text-black-700 text-lg leading-relaxed">
                {product.description}
            </p>
            
            {/* Product price (current and old) */}
            <div className="flex flex-col justify-between items-start mt-6">
                <span className="text-black text-2xl font-bold mb-1">
                    {product.price}
                </span>
                <span className="text-gray-400 line-through">
                    {product.oldPrice}
                </span>
            </div>
            
            {/* Button to add the product to the shopping cart */}
            <button 
                onClick={handleAddToCart} // On click, add product to the cart
                className={inline-block mt-4 px-6 py-2 ${inCart ? 'bg-gray-400' : 'bg-blue-700'} text-white text-center rounded flex items-center justify-center space-x-2}
                disabled={inCart} // Disable button if the product is already added
            >
                <i className="fas fa-shopping-bag"></i> {/* Cart icon */}
                <span className="font-bold">
                    {inCart ? 'Added to Cart' : 'Add To Your Shopping Bag'}
                </span>
            </button>
        </div>
    );
};

export default ProductCard; // Export the component for use in other parts of the app