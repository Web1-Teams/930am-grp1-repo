import React, { useState } from "react";
import DropDown from "./DropDown";

const FirstDropDown = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const Dropdown = (event) => {
    event.stopPropagation(); // Prevent parent click event from affecting this dropdown
    setIsDropdown(!isDropdown);
  };

  return (
    <ul>
      <li>
        {" "}
        <a
          href="/about us"
          className="block transition-color p-2 text-xl my-1 text-blue-950  hover:text-yellow-500 hover:text-2xl"
        >
          About us
        </a>
      </li>
      <li>
     
        <a
          href="/Brands"
          className="block transition-color p-2 text-xl my-1 text-blue-950  hover:text-yellow-500 hover:text-2xl"
        >
          Brands
        </a>
      </li>
      <li>
       
        <a
          href="/sales"
          className="block transition-color p-2 text-xl my-1 text-blue-950  hover:text-yellow-500 hover:text-2xl"
        >
          Sales
        </a>
      </li>

      <li onClick={Dropdown} className="relative  md:block transition-color ">
     
        {/*section  */}
        <button className="transition-color text-xl text-blue-950 hover:text-yellow-500 hover:text-2xl">
          Categories
        </button>
        {/* dropdown menu*/}
        {isDropdown && (
          <div className="border shadow-md text-center font-bold bg-blue-300 absolute  w-48  right-40 rounded-lg  p-1 top-1.5  mx-3.5 ">
            <DropDown />
          </div>
        )}
      </li>
    </ul>
  );
};

export default FirstDropDown;
