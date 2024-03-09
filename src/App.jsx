/* eslint-disable no-unused-vars */
import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./jsx/Contact";
import Hero from "./jsx/Hero";
import Navbar from "./jsx/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
