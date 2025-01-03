import React from "react";

const Checkbox = ({ name }) => {
    return(
        <label className="text-xl text-sky-900 font-bold "><input  type="checkbox" /> {name} </label> 
    );

};
 
export default Checkbox;