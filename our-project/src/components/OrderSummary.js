
import React from 'react';

const OrderSummary = ({ total }) => {
  const handleBuy = () => {
    alert('Item has been purchased!');
  };
  return (
    <div className="order-summary">
      <p className="text-xl m-2">Order Summary:</p>
      <p className="text-lg m-1">Total: ₪{total}</p>
      <button  onClick={handleBuy}  className="bg-blue-900 hover:bg-blue-950 text-lg mr-1 text-white font-bold py-2 px-4 rounded-lg">Checkout</button>
    </div>
  );
}

export default OrderSummary;
