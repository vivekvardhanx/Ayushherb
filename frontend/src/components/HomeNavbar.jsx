import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = ({
  searchTerm,
  onSearchChange,
  onToggleFilter,
  onToggleQuiz,
  isOpen,
  toggleMenu,
  isFilterOpen,
  setIsFilterOpen,
}) => {
  const handleMenuToggle = () => {
    toggleMenu();
    if (isFilterOpen) setIsFilterOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
      <div className="container mx-auto flex items-center justify-between py-4 px-5 sm:px-8">
        {/* 🌿AyushHerb Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl md:text-3xl font-bold text-green-800 font-logo tracking-wide">
            🌿AyushHerb
          </span>
        </Link>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="focus:outline-none">
            <span className="material-icons text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
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

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center w-80">
            <span className="material-icons text-main-color ml-2 mr-3">search</span>
            <input
              type="text"
              value={searchTerm}
              onChange={onSearchChange}
              className="flex-grow p-2 border rounded-xl border-main-color bg-sec-color placeholder:text-gray-400"
              placeholder="Search for plants..."
            />
          </div>

          <button
            onClick={onToggleFilter}
            className="flex items-center px-4 py-2 border border-main-color text-main-color rounded-xl bg-sec-color hover:bg-main-color hover:text-white transition-colors duration-200"
          >
            <i className="fa-solid fa-filter mr-2"></i>Filter
          </button>

          <button
            onClick={onToggleQuiz}
            className="px-4 py-2 border border-main-color text-main-color rounded-xl bg-sec-color hover:bg-main-color hover:text-white transition-colors duration-200"
          >
            <i className="fa-solid fa-question-circle mr-2"></i>Quiz
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-5 pb-4 space-y-3 shadow-md">
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
              className="block text-navbar-text border-b pb-1 border-gray-100 hover:text-sub-color"
              onClick={handleMenuToggle}
            >
              {label}
            </Link>
          ))}

          <div className="flex items-center border border-main-color rounded-xl px-3 bg-sec-color">
            <span className="material-icons text-main-color mr-2">search</span>
            <input
              type="text"
              value={searchTerm}
              onChange={onSearchChange}
              className="flex-grow p-2 text-sm bg-sec-color outline-none placeholder:text-gray-500"
              placeholder="Search for plants..."
            />
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => {
                handleMenuToggle();
                onToggleFilter();
              }}
              className="flex-1 px-4 py-2 border border-main-color text-main-color rounded-xl bg-sec-color hover:bg-main-color hover:text-white transition"
            >
              <i className="fa-solid fa-filter mr-2"></i>Filter
            </button>

            <button
              onClick={() => {
                handleMenuToggle();
                onToggleQuiz();
              }}
              className="flex-1 px-4 py-2 border border-main-color text-main-color rounded-xl bg-sec-color hover:bg-main-color hover:text-white transition"
            >
              <i className="fa-solid fa-question-circle mr-2"></i>Quiz
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;
