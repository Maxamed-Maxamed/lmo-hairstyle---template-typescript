import React from 'react';
import Header from './components/Header';
import Footer from './components/Foot';
import HeroSection from './components/HeroSection';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* Other sections will go here */}
      <Footer />
    </div>
  );
};

export default App;
