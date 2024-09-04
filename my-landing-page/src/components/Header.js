import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="p-4 flex justify-between items-center bg-black text-white">
      <h1 className="text-xl font-bold">Niklas Pettersson.</h1>
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <nav className={`lg:flex ${menuOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
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