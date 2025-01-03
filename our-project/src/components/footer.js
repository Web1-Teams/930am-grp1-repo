import React from "react";


const Footer = () => {
  return (
    <footer className="bg-blue-200 py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap px-8">
          
          <div className="w-1/4 px-4">
            <h4 className="text-lg font-medium mb-8">Company</h4>
            <ul className="list-none">
              <li>
                <a  href ="#"
                
                  className="text-blue-950 hover:text-white transition"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>

          
          <div className="w-1/4 px-4">
            <h4 className="text-lg font-medium mb-8">Mobile Apps</h4>
            <ul className="list-none">
              <li>
                <a
                  href="#"
                  className="text-blue-950 hover:text-white transition"
                >
                  Android
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-950 hover:text-white transition"
                >
                  iOS
                </a>
              </li>
            </ul>
          </div>

          
          <div className="w-1/4 px-4">
            <h4 className="text-lg font-medium mb-8">Customer Service</h4>
            <ul className="list-none">
              <li>
                <a
                  href="#"
                  className="text-blue-950 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-950 hover:text-white transition"
                >
                  Questions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-950 hover:text-white transition"
                >
                  Return and Exchange Policy
                </a>
              </li>
            </ul>
          </div>

          
          <div className="w-1/4 px-4">
            <h4 className="text-lg font-medium mb-8">Follow us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center justify-center h-10 w-10 bg-red-200 rounded-full text-gray-500 hover:bg-white transition"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center h-10 w-10 bg-red-200 rounded-full text-gray-500 hover:bg-white transition"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center h-10 w-10 bg-red-200 rounded-full text-gray-500 hover:bg-white transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center h-10 w-10 bg-red-200 rounded-full text-gray-500 hover:bg-white transition"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        
        <div className="mt-20 text-center">
          <p className="text-gray-500">
            <small>
              Electronice.com © 2017 - 2024. Yatsiv St 128, Jerusalem; Phone:
              123-123-123-123; All Rights Reserved. Designed by{" "}
              <a href="Electronice.com" className="text-yellow-500 underline">
                Electronice.com
              </a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;