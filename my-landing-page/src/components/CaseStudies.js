import React from 'react';
import Hero from './Hero'; // Import the Hero component
import Footer from './Footer'; // Import the Footer component
import Header from './Header';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <div className="bg-black text-white">
      
      <Header />
      
      {/* Hero Section */}
      <Hero 
      backgroundImage="/path-to-your-image.jpg"
      title="Case Studies." />

      {/* Product Categories Section */}
      <section className="bg-white text-black py-16 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 p-4 rounded-lg">
                <i className="icon-class-for-mobile-apps text-white text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-medium">Web Apps</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 p-4 rounded-lg">
                <i className="icon-class-for-web-design text-white text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-medium">Web design</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 p-4 rounded-lg">
                <i className="icon-class-for-digital-strategy text-white text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-medium">Digital strategy</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 p-4 rounded-lg">
                <i className="icon-class-for-development text-white text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-medium">Coding</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 p-4 rounded-lg">
                <i className="icon-class-for-digitalization text-white text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-medium">Digitalization</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 p-4 rounded-lg">
                <i className="icon-class-for-web-apps text-white text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-medium">User Experience design</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 p-4 rounded-lg">
                <i className="icon-class-for-design text-white text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-medium">Business Development</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 p-4 rounded-lg">
                <i className="icon-class-for-consulting text-white text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-medium">Consulting</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 p-4 rounded-lg">
                <i className="icon-class-for-startups text-white text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-medium">Startups</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-gray-100 py-8 text-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Link to="/instaroom" className="bg-white p-4 rounded-lg shadow-lg flex flex-col h-full">
              <img src="/images/instaroomChatPanel.jpg" alt="Instaroom Case Study" className="rounded-t-lg w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold mt-4">instaroom</h3>
              <div className="mt-auto">
                <p className="text-gray-600">#startups #productmanagement #coding #design #digitalstrategy</p>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link to="/interhome" className="bg-white p-4 rounded-lg shadow-lg flex flex-col h-full">
              <img src="/images/homePage.png" alt="Interhome Case Study" className="rounded-t-lg w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold mt-4">interhome</h3>
              <div className="mt-auto">
                <p className="text-gray-600">#digitaltransformation #digitalstrategy #productmanagement #design</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white text-black py-8">
        <div className="container mx-auto">
          <blockquote className="italic text-lg text-center">
            "Niklas is a source of joy and positivity. He is hard-working, effective, loyal and has a big heart."
          </blockquote>
          <div className="text-center mt-4">
            <img src="/images/referencePic2.jpeg" alt="Cecilia Sahlinström" className="inline-block rounded-full w-16 h-16" />
            <p className="text-gray-700">Cecilia Sahlström, Author and management consultant</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CaseStudies;
