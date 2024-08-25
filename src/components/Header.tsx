import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">LMO-Hairstyle</div>
        <nav>
          <ul className="flex space-x-4 text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hairstyles">Hairstyles</Link></li>
            <li><Link to="/makeup">Makeup</Link></li>
            <li><Link to="/nails">Nails</Link></li>
            <li><Link to="/eyelashes">Eyelashes</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;