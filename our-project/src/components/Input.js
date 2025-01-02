import React from "react";

const Input= ({ type, placeholder }) => {
    return (
     
        <input type={type} required placeholder={placeholder} className="rounded-lg h-10 w-80 text-gray-800 shadow-sky-900 shadow-lg border border-sky-900 placeholder:italic text-base hover:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-950"></input>
    
    );
  };

  
export default Input;