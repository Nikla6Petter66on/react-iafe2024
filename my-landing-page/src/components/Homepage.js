import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div className="bg-black text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Niklas Pettersson.</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400">Products</Link></li> 
            <li><Link to="/casestudies" className="hover:text-yellow-400">Case Studies</Link></li>
            <li><Link to="/contactme" className="hover:text-yellow-400">Get in touch</Link></li>
            <li><Link to="/aboutme" className="hover:text-yellow-400">About me</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
          <h2 className="text-5xl font-extrabold">Crafting Digital Excellence.</h2>
        </section>

        <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center bg-white text-black">
          <div className="border p-4 rounded hover:bg-yellow-400 hover:text-white">
            <p>Mobile apps</p>
          </div>
          <div className="border p-4 rounded hover:bg-yellow-400 hover:text-white">
            <p>Web design</p>
          </div>
          <div className="border p-4 rounded hover:bg-yellow-400 hover:text-white">
            <p>Digital strategy</p>
          </div>
          <div className="border p-4 rounded hover:bg-yellow-400 hover:text-white">
            <p>Development</p>
          </div>
          <div className="border p-4 rounded hover:bg-yellow-400 hover:text-white">
            <p>Digitalization</p>
          </div>
          <div className="border p-4 rounded hover:bg-yellow-400 hover:text-white">
            <p>Web apps</p>
          </div>
          <div className="border p-4 rounded hover:bg-yellow-400 hover:text-white">
            <p>Design</p>
          </div>
          <div className="border p-4 rounded hover:bg-yellow-400 hover:text-white">
            <p>Consulting</p>
          </div>
        </section>

        <section className="p-8 bg-gray-100 text-black">
          <h3 className="text-2xl font-bold mb-4">My Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded">
              <img src="/path-to-image-1.jpg" alt="Work 1" className="mb-2"/>
              <h4 className="font-semibold">Web app for vacation home owners</h4>
              <p>Digital module, React.js</p>
            </div>
            <div className="border p-4 rounded">
              <img src="/path-to-image-2.jpg" alt="Work 2" className="mb-2"/>
              <h4 className="font-semibold">Web app for booking offsites</h4>
              <p>React, Node.js</p>
            </div>
            <div className="border p-4 rounded">
              <img src="/path-to-image-3.jpg" alt="Work 3" className="mb-2"/>
              <h4 className="font-semibold">Chat-bot platform for the travel industry</h4>
              <p>Angular, JavaScript</p>
            </div>
            <div className="border p-4 rounded">
              <img src="/path-to-image-4.jpg" alt="Work 4" className="mb-2"/>
              <h4 className="font-semibold">Web app for finding and booking sport games</h4>
              <p>Startup, Consulting</p>
            </div>
          </div>
        </section>

        <section className="p-8 bg-white text-black">
          <h3 className="text-2xl font-bold mb-4">About me</h3>
          <div className="flex flex-col md:flex-row items-center">
            <img src="/path-to-your-profile-image.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-4"/>
            <div>
              <h4 className="text-xl font-semibold">Product Leader</h4>
              <p>I am an experienced Senior Product Manager...</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-4 bg-black text-white text-center">
        <p>&copy; 2024 Niklas Pettersson. Crafting Digital Excellence.</p>
      </footer>
    </div>
  );
};

export default Homepage;
