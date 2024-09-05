import React from 'react';
 import Navbar from './Components/Navbar';
import HeroSection from './Components/Homepage/HeroSection';
import Testimony from './Components/Homepage/Testimony';

const App = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <HeroSection />
      <Testimony />
    </div>
  );
};

export default App;