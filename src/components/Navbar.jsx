import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="   fixed top-0 left-0 w-full  ">
        <div className="flex items-center bg-purple-700 px-4 shadow-md z-50 px-md-5  py-2 justify-between gap-2 ">
          {" "}
          {/* Logo */}{" "}
          <div className=" flex items-center justify-center gap-3">
            <div className="md:hidden text-white text-[25px] mb-1">
              {" "}
              <FaBars onClick={toggleMenu} />
            </div>
            <div className=" animate-fade-in">
              <div className="flex items-center justify-center space-x-4 ">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-2xl">
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
          <div className="flex items-center justify-center gap-3 text-white ">
            <div className="relative w-full hidden lg:block text-[16px] ">
              <input
                type="text"
                placeholder="Search for books..."
                className=" w-full pl-10 pr-4 text-black py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <FaSearch className="lg:hidden text-[25px]" />
            <FaShoppingCart className=" text-[25px]" />
            <FaUser className=" text-[25px]" />
          </div>
        </div>
        {/* Side bar */}
        <div
          className={`fixed top-0 left-0 h-full bg-blue-100 w-1/2 z-40 transform transition-transform duration-500 ease-in-out  ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}>
          <div className="flex items-center justify-between  px-6 py-4 bg-blue-200">
            <h2 className="text-lg font-semibold text-blue-700">Menu</h2>
            <FaTimes
              className="text-xl cursor-pointer text-blue-700"
              onClick={toggleMenu}
            />
          </div>

          <ul className="flex flex-col gap-6 p-6 text-gray-800 font-medium">
            <Link className="cursor-pointer">Home</Link>
            <Link className="cursor-pointer">Categories</Link>
            <Link className="cursor-pointer">About</Link>
            <Link className="cursor-pointer">Contact</Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
