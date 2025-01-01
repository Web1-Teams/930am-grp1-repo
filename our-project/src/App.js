import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [inCart, setInCart] = useState(false);


    const handleAddToCart = () => {
        setInCart(true);
        alert(`${product.title} has been added to your shopping bag!`);
    };

    return (
        <div className="p-5 bg-blue-100 shadow-lg rounded-lg">
            <img src={product.image} alt={product.title} className="w-full h-auto rounded-lg mb-4" />
            <h1 className="text-xl font-bold text-blue-950 mb-2">{product.title}</h1>
            <p className="text-black-700 text-lg leading-relaxed">{product.description}</p>
            <div className="flex flex-col justify-between items-start mt-6">
                <span className="text-black text-2xl font-bold mb-1">{product.price}</span>
                <span className="text-gray-400 line-through">{product.oldPrice}</span>
            </div>
            <button 
                onClick={handleAddToCart}
                className={`inline-block mt-4 px-6 py-2 ${inCart ? 'bg-gray-400' : 'bg-blue-700'} text-white text-center rounded flex items-center justify-center space-x-2`}
                disabled={inCart}
            >
                <i className="fas fa-shopping-bag"></i>
                <span className="font-bold">{inCart ? 'Added to Cart' : 'Add To Your Shopping Bag'}</span>
            </button>
        </div>
    );
};

const App = () => {
    const products = [
        {
            id: 1,
            title: "Gaming",
            description: "PlayStation 5, 825GB SSD, DualSense controller, 4K graphics.",
            price: "₪2699",
            oldPrice: "₪3299",
            image: "https://cdn.salla.sa/qYApV/oHVDxf8xGAXBznRB5eaKAaLktSTzuedRmoqTuUiG.jpg",
        },
        {
            id: 2,
            title: "Kitchen",
            description: "LG refrigerator, silver color, 493 litres, inverter motor, electricity saving.",
            price: "₪3790",
            oldPrice: "₪5463",
            image: "https://m.media-amazon.com/images/I/61OuXgnfsCL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 3,
            title: "Coffee",
            description: "Nespresso coffee machine, premium design, with milk frother.",
            price: "₪890",
            oldPrice: "₪1200",
            image: "https://sc01.alicdn.com/kf/HTB1gt3gOFXXXXXyaXXXq6xXFXXXR/Best-espresso-coffee-machines-for-home-fully.jpg",
        },
        {
            id: 4,
            title: "Fridge",
            description: "LG refrigerator, silver color, 493 litres, inverter motor, electricity saving.",
            price: "₪3790",
            oldPrice: "₪5463",
            image: "https://sbitany.com/image/cache/catalog/107-230-0060-0070-20201109114838-270x270.jpg",
        },
    ];

    return (
        <div className="container mx-auto my-10 p-5 grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default App;