import React from 'react';

const CategoryCard = ({ image, altText, label }) => {
  return (
    <div className="category">
      <img src={image} alt={altText} />
      <p>{label}</p>
    </div>
  );
};

export default CategoryCard;
