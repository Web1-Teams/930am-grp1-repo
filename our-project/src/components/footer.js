import React from "react";

const Footerabd = () => {
  return (
    <footer className="bg-blue-200 py-16 rounded-xl shadow-lg border border-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-wrap px-8">
          
          <div className="w-1/4 px-4">
            <h4 className="text-lg text-blue-950 font-medium mb-8 hover:text-yellow-500 hover:text-2xl">Company</h4>
            <ul className="list-none">
              <li>
                <a
                  href="#about"
                  className="text-blue-950 hover:text-yellow-500 "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-blue-950 hover:text-yellow-500 transition"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          
          <div className="w-1/4 px-4">
            <h4 className="text-lg text-blue-950 font-medium mb-8 hover:text-yellow-500 hover:text-2xl">Mobile Apps</h4>
            <ul className="list-none">
              <li>
                <a
                  href="#android"
                  className="text-blue-950 hover:text-yellow-500 transition"
                >
                  Android
                </a>
              </li>
              <li>
                <a
                  href="#ios"
                  className="text-blue-950 hover:text-yellow-500 transition"
                >
                  iOS
                </a>
              </li>
            </ul>
          </div>

          
          <div className="w-1/4 px-4 ">
            <h4 className="text-lg text-blue-950 font-medium mb-8 hover:text-yellow-500 hover:text-2xl">Customer Service</h4>
            <ul className="list-none">
              <li>
                <a
                  href="#contact"
                  className="text-blue-950 hover:text-yellow-500 transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-blue-950 hover:text-yellow-500 transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#return-policy"
                  className="text-blue-950 hover:text-yellow-500 transition"
                >
                  Return & Exchange Policy
                </a>
              </li>
            </ul>
          </div>

          
          <div className="w-1/4 px-4">
            <h4 className="text-lg text-blue-950 font-medium mb-8 hover:text-yellow-500 hover:text-2xl">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="flex items-center justify-center h-10 w-10 bg-blue-900 rounded-full text-white hover:bg-yellow-600 transition"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#twitter"
                className="flex items-center justify-center h-10 w-10 bg-blue-400 rounded-full text-white hover:bg-yellow-600 transition"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#instagram"
                className="flex items-center justify-center h-10 w-10 bg-pink-500 rounded-full text-white hover:bg-yellow-600 transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#linkedin"
                className="flex items-center justify-center h-10 w-10 bg-blue-600 rounded-full text-white hover:bg-yellow-600 transition"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
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
            <a href="https://electronice.com" className="text-yellow-500 underline">
              Electronice.com
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footerabd;
