import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: false,    // whether animation should happen only once
    });
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
