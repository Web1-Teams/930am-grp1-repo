
import React from 'react'


const Hero = () => {

  return (  
    <article className="h-screen max-w-full bg-white flex flex-wrap rounded-xl ">

  {/* image*/}
    <div className="w-full md:w-1/2  py-0 h-auto flex justify-start items-center ">
      <img src="./assets/main.png"  alt="main" className="w-full h-auto object-cover "/>
    </div>

    {/* text*/}
    <div className="w-full md:w-1/2  flex flex-col justify-center text-blue-950 font-bold  px-4  ">
      <header className="text-4xl md:text-5xl text-center  items-center md:mb-4 ">
        SHOP SMARTER, NOT HARDER
      </header>
      <p className="text-xl md:text-2xl text-center ">
        Discover all your favorite electronics in one online store,
        experience convenience, innovation, and quality, delivered right to your doorstep.
      </p>
    </div>

   </article>

    )

}



export default Hero