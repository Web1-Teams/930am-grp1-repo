import React from 'react';

const Header = ({ HeaderName , desc }) => {
    return (
       <div>
            <div className="m-10  text-6xl font-medium text-blue-950 ">{HeaderName}</div>
            <div className="m-8 text-2xl text-blue-950 ">{desc} </div>
        </div>
    );
  };
 
export default Header;