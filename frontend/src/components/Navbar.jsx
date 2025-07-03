import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-8">
        {/* 🌿AyushHerb Logo */}
        <Link to="/" className="flex items-center">
          <span className="flex items-center text-green-800 text-2xl md:text-3xl font-bold font-logo tracking-wide">
            🌿AyushHerb
          </span>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-green-700 focus:outline-none"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`} />
          </button>
        </div>

        {/* Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:justify-center md:space-x-8`}>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center mt-4 md:mt-0">
            {[
              { to: "/", label: "Home" },
              { to: "/login", label: "Login" },
              { to: "/health-wellness", label: "Health" },
              { to: "/community", label: "Community" },
              { to: "/dashboard", label: "Dashboard" },
            ].map(({ to, label }) => (
              <Link
                key={label}
                to={to}
                className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-green-500 hover:text-green-700 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
