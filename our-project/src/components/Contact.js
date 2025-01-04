import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-blue-200 font-sans text-blue-950 p-6 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-blue-300 w-full max-w-2xl p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-center text-3xl font-extrabold text-white">Contact Us</h1>
        <p className="text-center text-blue-100 mt-2">
          We'd love to hear from you! Reach out through our channels below 
        </p>
      </div>

      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#a"
            className="flex items-center justify-center h-12 w-12 bg-blue-300 rounded-full text-white hover:bg-blue-500 transition shadow-md"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="#a"
            className="flex items-center justify-center h-12 w-12 bg-blue-300 rounded-full text-white hover:bg-blue-500 transition shadow-md"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="#a"
            className="flex items-center justify-center h-12 w-12 bg-blue-300 rounded-full text-white hover:bg-blue-500 transition shadow-md"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#a"
            className="flex items-center justify-center h-12 w-12 bg-blue-300 rounded-full text-white hover:bg-blue-500 transition shadow-md"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold text-blue-900">Customer Service</h2>
          <p className="mt-2 text-blue-700">Call us: <span className="font-bold">123-123-1111</span></p>
          <p className="mt-2">
            Email: <a href="mailto:info@Electroniatak.com" className="text-blue-500 underline hover:text-blue-700 transition">
              info@Electroniatak.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
