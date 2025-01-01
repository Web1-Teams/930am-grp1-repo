import React from "react";

const Button = ({ name }) => {
    return (

        
     <input  type="button" value={name} className=" rounded-md text-sm w-36 text-slate-200  bg-sky-900 hover:bg-sky-950  cursor-pointer"></input>

    );
};

export default Button;