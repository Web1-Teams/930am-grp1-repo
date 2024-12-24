import React, { useState } from "react";
import Dropdown from "./DropDown";
import FirstDropDown from "./FirstDropDown";


const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const DropdownOpen = (event) => {
    event.stopPropagation(); // Prevent clicks inside dropdown from toggling it
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-300 flex sticky top-0 shadow-lg w-full rounded-xl border border-gray-300 justify-between p-4 items-center ">
      {/* main logo */}
      <div className="flex  flex-shrink-0  items-center mx-2 ">
        <a href="#homepage">
          <img
            src="./Assert/logo without bg-2.png"
            alt="Logo"
            className=" h-24 w-auto "
          />
        </a>
      </div>

      {/* other elements */}
      <div>
        <ul className=" flex font-bold justify-center items-center space-x-10 sm:space-x-4 mx-2">
          <li
            onClick={DropdownOpen}
            className="relative  hidden  md:block transition-color "
          >
            {/*categories with dropdown */}
            <button className="transition-color text-xl text-blue-950 hover:text-yellow-500 hover:text-2xl">
              Categories
            </button>
            {/* dropdown menu*/}
            {isDropdownOpen && (
              <div className="  border shadow-md  absolute my-3.5 bg-blue-300 p-4 space-y-2 rounded-lg text-center font-bold  w-48 right-0 top-16 ">
                <Dropdown />
              </div>
            )}
          </li>

          <li className="hidden md:block hover:text-xl">

            {/*sales */}
            <a
              className=" transition-color text-blue-950 text-xl hover:text-yellow-500 hover:text-2xl"
              href="brands.html"
            >
              Sales
            </a>
          </li>

          <li className="hidden  md:block transition-color hover:text-xl">
      
            {/*brands*/}
            <a
              className="transition-color text-blue-950 text-xl hover:text-yellow-500 hover:text-2xl"
              href="brands.html"
            >
              Brands
            </a>
          </li>

          <li className="hidden md:block hover:text-xl">
     
            {/*about us */}
            <a
              className=" transition-color text-blue-950 text-xl hover:text-yellow-500 hover:text-2xl"
              href="brands.html"
            >
              About us
            </a>
          </li>

          {/*}
  <li>  {/*search 
   <input  className="w-74 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none sm:w-48 md:w-64"
   type="text" placeholder="Search here . . ." id="search-bar" name="search" />
  </li> 
*/}

          <li>
            {" "}
            {/*shopping bag logo */}
            <a
              href="shopping-bag.html"
              className="text-blue-950 transition-color  hover:text-yellow-500 "
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-9 hover:size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </a>
          </li>

          <li>
            {" "}
            {/*profile logo */}
            <a
              href="login.html"
              className="text-blue-950 transition-color  hover:text-yellow-500"
            >
              <button>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-9 hover:size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </a>
          </li>

          <li onClick={DropdownOpen} className="md:hidden flex">
        
            {/* section logo*/}
            {/* dropdown menu*/}
            <button className="text-blue-950 transition-color hover:text-yellow-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-9 hover:size-10"
              >
                <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="border shadow-md text-center font-bold bg-blue-300 md:hidden absolute space-y-1  w-48 my-4 right-0 rounded-lg  p-4  top-28">
                <FirstDropDown />
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
  
};

export default Nav;