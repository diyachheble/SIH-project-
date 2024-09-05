import React from 'react';

const Testimony = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">User Loves CareerPath</h2>
        <p className="text-gray-400">12k+ Happy Customers</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <p className="text-sm text-gray-300">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
            </p>
            <p className="mt-4 text-blue-400">- User {index + 1}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="px-6 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white">Read All 2,482 Reviews</button>
      </div>
    </div>
  );
};

export default Testimony;