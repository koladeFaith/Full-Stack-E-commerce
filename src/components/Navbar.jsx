import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h1 className="text-6xl font-bold text-white drop-shadow-2xl">
              Luxora
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full shadow-lg animate-pulse"></div>
        </div>
        <div>
          {" "}
          <li>Home</li>
          <li>Products</li>
          <li>Categories</li>
          <li>Order</li>
          <li>Contact us</li>
        </div>
        <div>Cart</div>
      </div>
    </>
  );
};

export default Navbar;
