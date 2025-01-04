import React, { useState, useEffect } from "react";

const Firstp = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="h-screen w-screen bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('./assets/bg.png')" }}
        >
          <div className="flex items-center justify-center h-screen overflow-hidden">
            <img
              src="./assets/logo without bg.png"
              className="max-w-full max-h-full size-12 h-auto w-auto sm:max-w-7/12"
              alt="Logo"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Firstp;
