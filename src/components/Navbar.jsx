import React from "react";
import { FaList, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className=" bg-purple-700 flex items-center justify-between gap-2 px-2 px-md-4 py-3">
        {/* Logo */}{" "}
        <div className=" flex items-center justify-center gap-3">
          <div className="md:hidden text-white text-[25px] mb-1">
            {" "}
            <FaList />
          </div>
          <div className=" animate-fade-in">
            <div className="flex items-center justify-center space-x-4 ">
              <h1 className="text-xl md:text-2xl  font-bold text-white drop-shadow-2xl">
                Luxora
              </h1>
            </div>
            <div className="w-15 md:w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full shadow-lg animate-pulse"></div>
          </div>
        </div>
        <div className="list-none hidden md:flex items-center justify-center gap-4 text-white fw-bold text-[18px]">
          <Link className="no-underline text-white">Home</Link>
          <Link className="no-underline text-white">Categories</Link>
          <Link className="no-underline text-white">About</Link>
          <Link className="no-underline text-white">Contact</Link>
        </div>
        <div className="flex items-center justify-center gap-3 text-white text-[20px]">
          <div className="sm:hidden md:flex relative w-full max-w-sm text-[18px] ">
            <input
              type="text"
              placeholder="Search for books..."
              className="w-full pl-10 pr-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <FaSearch className="md:hidden" />
          <FaShoppingCart />
          <FaUser />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
