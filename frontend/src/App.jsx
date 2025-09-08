import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from "react";
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Workshop from './pages/Workshop';
import Consultation from './pages/Consultation'
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/workshop' element = {<Workshop />}/>
        <Route path='/consultation' element = {<Consultation />}/>
        {/* Add a catch-all route that redirects to home */}
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App