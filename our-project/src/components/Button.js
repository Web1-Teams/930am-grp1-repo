import React from "react";

const Button = ({ name , link}) => {
    return (

        
        <a href={link} className=" text-base text-sky-900 font-bold hover:underline cursor-pointer">{name}</a>
    
    );
};

export default Button;

//type="button" value={name} className=" rounded-md text-sm w-36 text-slate-200  bg-sky-900 hover:bg-sky-950  cursor-pointer"