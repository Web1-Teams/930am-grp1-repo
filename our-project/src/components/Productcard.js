import React, { useState } from 'react';

// مكوّن Card لعرض معلومات المنتج
const ProductCard = ({ product }) => {
    // حالة لتتبع ما إذا كان المنتج قد تم إضافته إلى العربة أم لا
    const [inCart, setInCart] = useState(false);

    // دالة لإضافة المنتج إلى العربة
    const handleAddToCart = () => {
        setInCart(true); // تغيير الحالة إلى "تمت إضافته"
        alert(${product.title} has been added to your shopping bag!); // عرض رسالة للمستخدم
    };

    return (
        <div className="p-5 bg-blue-100 shadow-lg rounded-lg">
            {/* صورة المنتج */}
            <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto rounded-lg mb-4" 
            />
            
            {/* عنوان المنتج */}
            <h1 className="text-xl font-bold text-blue-950 mb-2">
                {product.title}
            </h1>
            
            {/* وصف المنتج */}
            <p className="text-black-700 text-lg leading-relaxed">
                {product.description}
            </p>
            
            {/* السعر القديم والجديد للمنتج */}
            <div className="flex flex-col justify-between items-start mt-6">
                <span className="text-black text-2xl font-bold mb-1">
                    {product.price}
                </span>
                <span className="text-gray-400 line-through">
                    {product.oldPrice}
                </span>
            </div>
            
            {/* زر إضافة المنتج إلى العربة */}
            <button 
                onClick={handleAddToCart} // عند الضغط، يتم إضافة المنتج إلى العربة
                className={inline-block mt-4 px-6 py-2 ${inCart ? 'bg-gray-400' : 'bg-blue-700'} text-white text-center rounded flex items-center justify-center space-x-2}
                disabled={inCart} // تعطيل الزر إذا تم إضافة المنتج بالفعل
            >
                <i className="fas fa-shopping-bag"></i> {/* أيقونة العربة */}
                <span className="font-bold">
                    {inCart ? 'Added to Cart' : 'Add To Your Shopping Bag'}
                </span>
            </button>
        </div>
    );
};


export default ProductCard; // تصدير المكوّن للاستخدام في أماكن أخرى