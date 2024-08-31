import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 px-8 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-lg font-bold">niklas pettersson.</p>
          <p className="text-sm">Crafting Digital Excellence.</p>
        </div>
        
        <div className="flex space-x-4 mb-6 md:mb-0">
          <a href="#" className="bg-yellow-400 p-2 rounded-full">
            <i className="fab fa-facebook-f text-black"></i>
          </a>
          <a href="#" className="bg-yellow-400 p-2 rounded-full">
            <i className="fab fa-twitter text-black"></i>
          </a>
          <a href="#" className="bg-yellow-400 p-2 rounded-full">
            <i className="fab fa-instagram text-black"></i>
          </a>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/products" className="hover:text-yellow-400">Product</Link>
          <Link to="/casestudies" className="hover:text-yellow-400">Case Studies</Link>
          <Link to="/contact" className="hover:text-yellow-400">Get in touch</Link>
          <Link to="/aboutme" className="hover:text-yellow-400">About me</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
