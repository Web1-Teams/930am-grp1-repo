import React from "react";
import ProductInBag from "../components/ProductInBag";
import OrderSummary from "../components/OrderSummary";
import data from "../components/data";

const ShoppingBag = () => {
  return (
    <div className="bg-blue-200 md:flex flex-col rounded-lg justify-start h-screen items-center p-3">
      {/* header */}
      <header className=" mb-3  justify-center border p-6 shadow-md bg-blue-300 rounded-lg md:w-2/3">
        <h1 className="text-4xl font-bold text-center text-blue-950">
          Shopping bag
        </h1>
      </header>

      {/* Products */}
      <main className="flex flex-col p-3 shadow-md bg-blue-50 text-blue-950 rounded-lg h-auto md:w-2/3">
        <ProductInBag
          name={data.brandData[1].name}
          price={data.brandData[1].price}
        />
      </main>

      {/* Order Summary */}
      <main className="flex flex-col justify-center  p-3 mt-3 shadow-md bg-blue-50 text-blue-950 rounded-lg h-auto md:w-2/3">
        <div className="font-bold flex justify-between items-center bg-blue-300 rounded-lg p-1 shadow">
          <OrderSummary />
        </div>
      </main>
    </div>
  );
};

export default ShoppingBag;
