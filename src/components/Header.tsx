import React from 'react';

// Define a functional component for the Header
const Header: React.FC = () => {
  return (
    // Create a header element with styling classes
    <header className="bg-primary p-4">
      {/* Container for centering content and creating a flex layout */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or site title */}
        <div className="text-white text-3xl font-bold">LMO-Hairstyle</div>
        
        {/* Navigation menu */}
        <nav>
          {/* Unordered list for navigation items */}
          <ul className="flex space-x-4 text-white">
            {/* Navigation menu items */}
            <li>Home</li>
            <li>Hairstyles</li>
            <li>Makeup</li>
            <li>Nails</li>
            <li>Eyelashes</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Export the Header component as the default export
export default Header;