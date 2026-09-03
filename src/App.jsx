import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

import Footer from "./components/Footer";

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
      {/* Experience */}
       <Experience />
      {/* Contact */}
<Contact />
{/* Footer */}
<Footer />
    </div>
  );
};

export default App;