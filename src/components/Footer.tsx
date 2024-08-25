import React from 'react';

// Define a functional component for the Footer
const Footer: React.FC = () => {
  return (
    // Create a footer element with styling classes
    <footer className="bg-secondary p-4 text-white mt-8">
      {/* Container for centering content */}
      <div className="container mx-auto text-center">
        {/* Copyright notice */}
        <p>&copy; 2024 LMO-Hairstyle. All rights reserved.</p>
        {/* Links to Terms and Conditions and Privacy Policy */}
        <p>
          {/* Use '#' as placeholder links */}
          <a href="/#" className="text-accent">Terms and Conditions</a> | 
          <a href="/#" className="text-accent"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

// Export the Footer component as the default export
export default Footer;
