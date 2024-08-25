import React from 'react';

// Define a functional component for the HeroSection
const HeroSection: React.FC = () => {
  return (
    // Create a section element with styling classes for the hero area
    <section className="bg-gray-light p-8 text-center">
      {/* Main headline */}
      <h1 className="text-4xl font-bold text-primary">Transform Your Look, Inside and Out</h1>
      
      {/* Subheadline or description */}
      <p className="text-secondary mt-4">Discover the perfect hairstyle, makeup, and more!</p>
      
      {/* Call-to-action button */}
      <button className="mt-6 px-6 py-3 bg-accent text-black rounded">Explore Now</button>
    </section>
  );
};

// Export the HeroSection component as the default export
export default HeroSection;
