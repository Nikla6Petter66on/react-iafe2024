import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center bg-black text-white">
      <h1 className="text-xl font-bold">Niklas Pettersson.</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-400">Product</Link></li>
          <li><Link to="/casestudies" className="hover:text-yellow-400">Case Studies</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Get in touch</Link></li>
          <li><Link to="/aboutme" className="hover:text-yellow-400">About me</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;