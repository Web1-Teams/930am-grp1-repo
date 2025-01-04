import React from 'react';
import CategoryCard from './CategoryCard';

const ShopByCategoryPage = () => {
  const categories = [
    {
      image: "https://sbitany.com/image/cache/catalog/Refrigerator-20220630105753-200x200.png?v=1.0",
      altText: "Home Applications",
      label: "Home Applications"
    },
    {
      image: "https://sbitany.com/image/cache/catalog/Categories/Consoles-2023031560855-200x200.png",
      altText: "Gaming",
      label: "Gaming"
    },
    {
      image: "https://sbitany.com/image/cache/catalog/Kitchen-20220630105407-200x200.png",
      altText: "Kitchen",
      label: "Kitchen"
    },
    {
      image: "https://sbitany.com/image/cache/catalog/Coffee-Espresso-20220630111656-200x200.png?v=1.0",
      altText: "Coffee & Espresso",
      label: "Coffee & Espresso"
    },
    {
      image: "https://sbitany.com/image/cache/catalog/category%20images/Audio-2022040522047-200x200.png",
      altText: "Audio",
      label: "Audio"
    },
    {
      image: "https://sbitany.com/image/cache/catalog/category%20images/Personal-2022040522916-200x200.png",
      altText: "Personal & Beauty Care",
      label: "Personal & Beauty Care"
    }
  ];

  return (
    <div className="container">
      <h1>Shop by Category</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            altText={category.altText}
            label={category.label}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategoryPage;
