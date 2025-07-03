import React from 'react';

const FirstPage = ({ onGetStartedClick }) => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8 bg-white">
      <div className="bg-sec-color p-6 md:p-10 shadow-xl rounded-3xl w-full max-w-7xl flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        
        {/* 🌿 Text Section */}
        <div className="w-full md:w-6/12 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-main-color mb-4 leading-tight">
            Step Into Nature's Pharmacy: <br className="hidden md:inline" /> Your Virtual Herbal Haven
          </h1>
          <p className="text-gray-700 text-md md:text-xl leading-relaxed">
            Explore a world of traditional healing with our curated collection of medicinal plants.
            Unveil the ancient wisdom of <strong>AYUSH</strong> and embrace the natural way to well-being.
          </p>
          <button
            onClick={onGetStartedClick}
            className="bg-main-color hover:bg-green-700 text-white font-semibold px-6 py-3 mt-6 rounded-xl text-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300 w-full md:w-52"
          >
            🌿 Get Started
          </button>
        </div>

        {/* 🌿 Image Section */}
        <div className="w-full md:w-5/12 flex justify-center">
          <img
            src="/images/firstpage.png"
            alt="Herbal illustration of nature and healing"
            className="w-52 h-52 md:w-80 md:h-80 rounded-full object-cover border-4 border-green-300 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
