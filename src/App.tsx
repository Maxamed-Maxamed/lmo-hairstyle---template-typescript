import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Hairstyles from './pages/Hairstyles';
import Makeup from './pages/Makeup';
import Nails from './pages/Nails';
import Eyelashes from './pages/Eyelashes';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/hairstyles" element={<Hairstyles />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/nails" element={<Nails />} />
        <Route path="/eyelashes" element={<Eyelashes />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;