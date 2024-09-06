import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Foundation from './Foundation';
import Exploration from './Exploration';
import DevelopmentTesting from './DevelopmentTesting';
import Launch from './Launch';
import { Outlet, Link } from 'react-router-dom';

// Define the steps and components for the process overview
const steps = [
  { name: 'foundation', component: <Foundation /> },
  { name: 'exploration', component: <Exploration /> },
  { name: 'agile', component: <DevelopmentTesting /> },
  { name: 'launch', component: <Launch /> }
];

const Products = () => {
  const [activeStep, setActiveStep] = useState(0); // State to track the active step
  const intervalDuration = 60000; // 1 minute (60000 milliseconds)

  // Automatically cycle through the steps every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length); // Cycle through the steps
    }, intervalDuration);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="bg-black text-white">
      <Header />

      <Hero 
        title="Product."
        backgroundImage="my-background-image.png"
      />

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

      {/* Process Overview */}
      <section className="p-8 bg-gray-100 text-black">
        <h3 className="text-2xl font-bold mb-4 text-center">Process</h3>
        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          {steps.map((step, index) => (
            <div key={step.name} className="text-center">
              <div
                className={`w-28 h-28 flex items-center justify-center rounded-full border-2 border-yellow-400 text-black mb-2 p-2 cursor-pointer hover:bg-yellow-400 hover:text-black transition-colors duration-300 ${activeStep === index ? 'bg-yellow-400' : ''}`}
                onClick={() => setActiveStep(index)} // Allow manual click to change the step
              >
                <span className="font-semibold text-sm">{step.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step Content Section */}
      <section className="p-8 bg-white text-black">
        <div className="container mx-auto">
          {steps[activeStep].component} {/* Render the current step's component */}
        </div>
      </section>

      {/* Featured Products */}
      <section className="p-8 bg-white text-black">
        <h3 className="text-2xl font-bold mb-4">Additional examples of products I have developed</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded">
            <img src="/images/interchalet.png" alt="Web app for vacation home owners" className="mb-2" />
            <h4 className="font-semibold">Search and book vacation homes site</h4>
            <p className="text-gray-600">#productmanagement #uxdesign #digitaltransformation #scrum</p>
          </div>
          <div className="border p-4 rounded">
            <img src="/images/instaroomChatPanel.jpg" alt="Web app for team offsite booking" className="mb-2" />
            <h4 className="font-semibold">SaaS platform powering customizable conversational automations</h4>
            <p className="text-gray-600">#startups #uxdesign #uidesign #productmanagement #fullstack #coding</p>
          </div>
        </div>
        <div className="mt-4 text-right">
          <Link to="/casestudies" className="text-yellow-400 hover:underline">View case studies &rarr;</Link>
        </div>
      </section>

      {/* Reference/Quote Section */}
      <section className="p-8 bg-gray-100 text-center text-black">
        <blockquote className="text-xl font-semibold italic text-gray-800 mb-4">
          "Niklas would undoubtedly be one of the greatest assets at any company, and he's my role model of how a manager and leader should be."
        </blockquote>
        <div className="flex flex-col items-center">
          <img 
            src="/images/referencePic.jpeg" 
            alt="Dimitar Todorov" 
            className="w-16 h-16 rounded-full mb-4"
          />
          <p className="font-semibold">Dimitar Todorov, Area Manager Expedia Group</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
