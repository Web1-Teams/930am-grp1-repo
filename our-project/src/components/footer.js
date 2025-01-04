import React from "react";
import {Link} from "react-router-dom";

const Footerabd = () => {
  return (
    <footer className="bg-blue-200 py-16 rounded-xl shadow-lg border border-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-wrap px-8">
          
          <div className="w-1/4 px-4">
            <h4 className="text-lg text-blue-950 font-medium mb-8 hover:text-yellow-500 hover:text-2xl ">Company</h4>
            <ul className="list-none">
              <li>
                <Link to="/AboutUs"
               
                  className="text-blue-950 hover:text-white transition ">
                
                  About Us
                  </Link>
              </li>
             
            </ul>
          </div>

         
          <div className="w-1/4 px-4">
            <h4 className="text-lg text-blue-950 font-medium mb-8 hover:text-yellow-500 hover:text-2xl">Mobile Apps</h4>
            <ul className="list-none">
              <li>
                  <Link to="#"
                
                  className="text-blue-950 hover:text-white transition"
                >
                  Android
                  </Link>
              </li>
              <li>
                <Link to="#"
                  href="#ios"
                  className="text-blue-950 hover:text-white transition"
                >
                  iOS
                  </Link>
              </li>
            </ul>
          </div>

          
          <div className="w-1/4 px-4">
            <h4 className="text-lg text-blue-950 font-medium mb-8 hover:text-yellow-500 hover:text-2xl">Customer Service</h4>
            <ul className="list-none">
              <li>
                <Link to="/Contact"
                  
                  className="text-blue-950 hover:text-white transition"
                >
                  Contact
                  </Link>
              </li>
              <li>
                     <Link to="/FAQs"
         
                  className="text-blue-950 hover:text-white transition"
                >
                  FAQ
                  </Link>
              </li>
              <li>
                <Link to="/PagePolicies"
                 
                  className="text-blue-950 hover:text-white transition"
                >
                  Return & Exchange Policy
                  </Link>
              </li>
            </ul>
          </div>

          
          <div className="w-1/4 px-4">
            <h4 className="text-lg text-blue-950 font-medium mb-8 hover:text-yellow-500 hover:text-2xl">
              Follow Us
            </h4>
            <div className="flex space-x-4">
               <Link to="#"
                href="#facebook"
                className="flex items-center justify-center h-10 w-10 bg-blue-900 rounded-full text-white hover:bg-yellow-600 transition"
              >
                <i className="fa-brands fa-facebook-f"></i>
                </Link>
            <Link to="#"
                href="#twitter"
                className="flex items-center justify-center h-10 w-10 bg-blue-400 rounded-full text-white hover:bg-yellow-600 transition"
              >
                <i className="fa-brands fa-twitter"></i>
                </Link>
           <Link to="#"
                href="#instagram"
                className="flex items-center justify-center h-10 w-10 bg-pink-500 rounded-full text-white hover:bg-yellow-600  transition"
              >
                <i className="fa-brands fa-instagram"></i>
                </Link>
              <Link to="#"
                href="#linkedin"
                className="flex items-center justify-center h-10 w-10 bg-blue-600 rounded-full text-white hover:bg-yellow-600  transition"
              >
                <i className="fa-brands fa-linkedin-in"></i>
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-20 text-center">
        <p className="text-gray-500">
          <small>
            Electronice.com © 2017 - 2024. Yatsiv St 128, Jerusalem; Phone:
            123-123-123-123; All Rights Reserved. Designed by{" "}
            <Link to="#" className="text-yellow-500 underline">
              Electronice.com
              </Link>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footerabd;