import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Hero  from './Hero';
import Footer from './Footer';


const Homepage = () => {
  return (
    <div className="bg-black text-white">
      <Header />

      <main>
        <Hero
          title="Crafting Digital Excellence."
          backgroundImage="/path-to-your-image.jpg"
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

        <section className="p-8 bg-gray-100 text-black">
          <h3 className="text-2xl font-bold mb-4">Some of My works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded">
              <img src="/images/vacatioHomeAppImage.jpg" alt="Work 1" className="mb-2"/>
              <h4 className="font-semibold">Web app for 20.000 vacation rental home owners</h4>
              <p>Product Management, Web-App, Digital Transformation, Digitalization, Digital Strategy</p>
            </div>
            <div className="border p-4 rounded">
              <img src="/images/teamOffsiteBookingImage.jpg" alt="Work 2" className="mb-2"/>
              <h4 className="font-semibold">Web app for booking team offsites</h4>
              <p>Coding, Design, Digital Strategy, Web-App, Startups</p>
            </div>
            <div className="border p-4 rounded">
              <img src="/images/instaroomAssistant.png" alt="Work 3" className="mb-2"/>
              <h4 className="font-semibold">Chat-bot platform for the travel industry</h4>
              <p>Coding, Design, Digital Strategy, Consulting, Startups, Product Management, Startups</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-8 text-black">
  <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-16">
    <div className="md:w-1/3 mb-8 md:mb-0 md:pr-12">
      <img 
        src="/images/niklasProfile.jpg" 
        alt="Niklas Pettersson" 
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
    <div className="md:w-2/3 text-left">
      <h2 className="text-3xl font-bold mb-4">About me</h2>
      <h3 className="text-xl font-semibold mb-4">Product Leader</h3>
      <p className="text-base leading-relaxed">
        I am an experienced Senior Product Manager, founder and business developer with over ten years of expertise in digital, particularly within startup environments and in digital transformation settings. My background includes a strong focus on product development, user experience (UX/UI), and data-driven decision-making. I have successfully led cross-functional teams to deliver high-quality, user-centric solutions from conceptualization to launch, ensuring alignment with company strategy and customer needs.
      </p>
      <p className="text-base leading-relaxed mt-4">
        My career has been marked by a deep commitment to simplifying complex digital experiences for non-tech-savvy clients, particularly in the travel and hotel-tech sectors but also across other industries. I have extensive experience conducting market research, analyzing product usage data, and transforming customer feedback into actionable insights that drive product enhancements and improve user satisfaction. I also have experience in developing new markets via direct sales channels and have closed million-dollar deals across industries. I have also closed millions in funding for some of my products.
      </p>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
