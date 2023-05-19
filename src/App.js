import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import galaxyCycleAnimation from "./lotties/galaxy-cycle.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Voyage from "./pages/Voyage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
 

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voyage" element={<Voyage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
