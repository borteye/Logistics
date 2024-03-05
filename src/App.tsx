import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import TrackPackage from "./Pages/TrackPackage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logistica/about-us" element={<About />} />
          <Route path="/logistica/our-services" element={<Services />} />
          <Route path="/logistica/contact-us" element={<Contact />} />
          <Route path="/logistica/track-packages" element={<TrackPackage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
