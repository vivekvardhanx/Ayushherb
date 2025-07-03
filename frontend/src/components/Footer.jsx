import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sec-color text-main-color py-12 px-4 md:px-10 shadow-xl border-t-2 border">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Left Section: Logo */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-4">
  <span className="text-4xl md:text-5xl font-extrabold text-green-700 tracking-wide font-logo">
    🌿AyushHerb
  </span>
</div>

        </div>

        {/* Center Section: Address & Email */}
        <div className="md:w-1/3 text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start">
            <i className="fa-solid fa-location-dot text-main-color text-2xl mr-4"></i>
            <p className="text-lg leading-tight">
              <span className="block">MVSR Engineering College,</span>
              Hyderabad, 501510
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <i className="fa-solid fa-envelope text-main-color text-2xl mr-4"></i>
            <p className="text-lg">vivekvardhan2500@gmail.com</p>
          </div>
        </div>

        {/* Right Section: Tech Stack */}
        <div className="md:w-1/3 text-center md:text-left">
          <span className="text-xl font-bold">Technology Stack Used:</span>
          <div className="flex flex-wrap justify-center md:justify-start mt-6 gap-4">
            <a href="https://www.instagram.com/yashwanth_x.x_?igsh=YmMzZHFweWhrYWpp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-react text-4xl text-blue-500 hover:text-sub-color"></i>
            </a>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-node-js text-4xl text-green-500 hover:text-sub-color"></i>
            </a>
            <a href="https://www.instagram.com/nikill.fx_?igsh=enlieXhyOXBwZ2Zu" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-database text-4xl text-yellow-500 hover:text-sub-color"></i>
            </a>
            <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-vr-cardboard text-4xl text-purple-500 hover:text-sub-color"></i>
            </a>
            <a href="https://www.instagram.com/vivekvardhanu?igsh=MW9vZTBhZHp0amNzNQ==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-css3-alt text-4xl text-blue-600 hover:text-sub-color"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <h3 className="text-center mt-16 text-lm font-medium border-t-2 border-gray-300 pt-4">
        © Copyright 2025 AyushHerb — All Rights Reserved. Designed and Developed by <span className="font-semibold text-sub-color">Team AyushHerb</span>
      </h3>
    </footer>
  );
};

export default Footer;
