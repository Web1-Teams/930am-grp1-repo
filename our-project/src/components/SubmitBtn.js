import React from "react";
   
const Submit = ({ name }) => {
  return (
    <input type="submit" value={name} className="rounded-full w-52 h-12 text-slate-200 bg-sky-900 hover:bg-sky-950 cursor-pointer"></input>
  

    );

  };

export default Submit;