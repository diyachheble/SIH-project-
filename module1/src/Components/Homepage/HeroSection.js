import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-5xl font-bold mb-6">Get Right College at Fingertips</h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">Try Now</button>
          <div className="mt-4">
            <p className="text-gray-400">Trusted by 50k+ users</p>
            <p className="text-blue-400">4.8/5 (2.5k Reviews)</p>
          </div>
        </div>
        
        {/* Right Side Image (Dummy for now) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-80 h-80 bg-gray-700 rounded-full"></div> {/* Placeholder for image */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
