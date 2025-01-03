import React from 'react'; // استيراد مكتبة React
import ProductCard from './components/ProductCard'; // استيراد مكوّن ProductCard من ملفه

// المكوّن الرئيسي للتطبيق
const App = () => {
    // مصفوفة تحتوي على معلومات المنتجات
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
            {/* عرض قائمة المنتجات باستخدام مكوّن ProductCard */}
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

<<<<<<< HEAD
export default App; // تصدير المكوّن الرئيسي للاستخدام في ملف index.js
=======
export default ProductCard; // تصدير المكوّن للاستخدام في أماكن أخرى
>>>>>>> 38b58f92a40419ee3ce0841ab12c721eacbb59d6
