import React from 'react';
import Header from './Header';
import Hero from './Hero';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Products = () => {
  return (
    <div className="bg-black text-white">
      <Header />

      <Hero 
        title="Products."
        backgroundImage="my-background-image.png"
      />

      {/* Product Categories */}
      <section className="bg-white text-black p-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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
        <div className="border p-4 rounded hover:bg-yellow-400 hover:text-white">
          <p>Startups</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="p-8 bg-white text-black">
        <h3 className="text-2xl font-bold mb-4">Mobile apps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded">
            <img src="/path-to-image-1.jpg" alt="Web app for vacation home owners" className="mb-2"/>
            <h4 className="font-semibold">Web app for vacation home owners</h4>
            <p className="text-gray-600">#mobileapp #productmanagement #design #digitaltransformation</p>
          </div>
          <div className="border p-4 rounded">
            <img src="/path-to-image-2.jpg" alt="Web app for team offsite booking" className="mb-2"/>
            <h4 className="font-semibold">Web app for team offsite booking</h4>
            <p className="text-gray-600">#mobileapp #design #productmanagement</p>
          </div>
        </div>
        <div className="mt-4 text-right">
          <a href="/projects" className="text-yellow-400 hover:underline">View more projects &rarr;</a>
        </div>
      </section>

      {/* Testimonial */}
      <section className="p-8 bg-gray-100 text-black">
        <blockquote className="italic text-lg mb-4">
          "Niklas would be undoubtedly one of the greatest assets at any company, and he's my role model of how a manager and leader should be."
        </blockquote>
        <p className="font-semibold">Dimitrar Todorov, Area Manager, Expedia Group</p>
      </section>

      {/* How I Work */}
      <section className="p-8 bg-white text-black">
        <h3 className="text-2xl font-bold mb-4">Fundamentals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-2">Collaborative Discovery</h4>
            <p>I believe in the power of collaboration. My process begins with a thorough and collaborative discovery phase...</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Agile Development</h4>
            <p>Lets embrace an agile development methodology that ensures flexibility and adaptability throughout the project lifecycle or for the infinity of the product. This iterative approach allows us to respond promptly to evolving requirements incorporate feedback seamlessly, and deliver high-quality solutions efficiently.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Transparent Communication</h4>
            <p>Transparent communication is the cornerstone of my stakeholder relationships. From project kickoff to delivery...</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="p-8 bg-gray-100 text-black">
        <h3 className="text-2xl font-bold mb-4">Process</h3>
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400 text-black flex items-center justify-center mb-2">1</div>
            <p className="font-semibold">foundation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400 text-black flex items-center justify-center mb-2">2</div>
            <p className="font-semibold">exploration</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400 text-black flex items-center justify-center mb-2">3</div>
            <p className="font-semibold">development & testing</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400 text-black flex items-center justify-center mb-2">4</div>
            <p className="font-semibold">launch</p>
          </div>
        </div>
      </section>

      {/* UX/UI Exploration Section */}
      <section className="p-8 bg-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Outlet />
          </div>
          <div className="flex items-center h-full mt-8 md:mt-0 md:ml-8 lg:ml-12">
            <ul className="space-y-8">
              <li className="font-semibold border-b border-gray-300 pb-2">
                <Link to="foundation" className="hover:text-yellow-400">foundation</Link>
              </li>
              <li className="font-semibold border-b border-gray-300 pb-2">
                <Link to="exploration" className="hover:text-yellow-400">exploration</Link>
              </li>
              <li className="font-semibold border-b border-gray-300 pb-2">
                <Link to="development-testing" className="hover:text-yellow-400">development & desting</Link>
              </li>
              <li className="font-semibold border-b border-gray-300 pb-2">
                <Link to="launch" className="hover:text-yellow-400">launch</Link>
              </li>
            </ul>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 bg-black text-white text-center">
        <p>&copy; 2024 Niklas Pettersson. Crafting Digital Excellence.</p>
      </footer>
    </div>
  );
};

export default Products;
