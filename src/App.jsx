import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07070A] text-white">

      {/* Home */}
      <div className="relative">
        <Navbar />
        <Hero />
        
      </div>

      {/* About */}
      <About />
      {/* Skills */}
       <Skills />
<Contact />
    </div>
  );
};

export default App;