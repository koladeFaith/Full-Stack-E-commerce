import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Contact = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Luxora</h1>
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <FaBars size={24} />
        </button>
      </nav>

      {/* Sidebar & Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="relative w-1/2 bg-white shadow-lg z-50 p-6 transition-transform duration-300">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <ul className="mt-10 space-y-4 text-lg font-semibold">
              <li>Home</li>
              <li>Categories</li>
              <li>Cart</li>
              <li>Profile</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact