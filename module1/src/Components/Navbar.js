import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      <div className="text-2xl font-bold">CareerPath AI</div>
      <div className="space-x-8">
        <a href="#" className="hover:text-blue-500">Products</a>
        <a href="#" className="hover:text-blue-500">Features</a>
        <a href="#" className="hover:text-blue-500">Pricing</a>
        <a href="#" className="hover:text-blue-500">Support</a>
      </div>
      <button className="px-6 py-2 border rounded-full text-white border-white hover:bg-blue-500">Start Free Trial</button>
    </nav>
  );
};

export default Navbar;