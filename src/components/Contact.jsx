import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa"; // List icon
const Contact = () => {
const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Luxora</h1>

        {/* Hamburger Icon (Only on Mobile) */}
        <div className="md:hidden">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Nav Items for Medium and Up */}
        <ul className="hidden md:flex gap-6">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Categories</li>
          <li className="cursor-pointer">About</li>
        </ul>
      </div>

      {/* Mobile Nav - Toggle with State */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Categories</li>
          <li className="cursor-pointer">About</li>
        </div>
      )}
    </nav>
  );
}

export default Contact
