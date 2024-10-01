import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div className="bg-black text-white">
      <Header />

      <main>
        <Hero
          title="Your digital success starts here."
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

        {/* Products Section */}
        <section className="p-8 bg-gray-100 text-black">
          <h3 className="text-2xl font-bold mb-4">Some of my work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded">
              <img src="/images/vacatioHomeAppImage.jpg" alt="Work 1" className="mb-2" />
              <h4 className="font-semibold">Web app for 20.000 vacation home owners</h4>
              <p>Product Management, Web-App, Digital Transformation, Digitalization, Digital Strategy</p>
            </div>
            <div className="border p-4 rounded">
              <img src="/images/teamOffsiteBookingImage.jpg" alt="Work 2" className="mb-2" />
              <h4 className="font-semibold">Web app for booking team offsites across Nordics</h4>
              <p>Coding, Design, Digital Strategy, Web-App, Startups</p>
            </div>
            <div className="border p-4 rounded">
              <img src="/images/PerformanceAnalytics.jpg" alt="Work 2" className="mb-2" />
              <h4 className="font-semibold">Performance Management Application for Sony Mobile</h4>
              <p>Design, Digital Strategy, Web-App, Digitalization, Product Management</p>
            </div>
            <div className="border p-4 rounded">
              <img src="/images/MandCHotels.jpg" alt="Work 2" className="mb-2" />
              <h4 className="font-semibold">Digital concierge for luxury hospitality brand</h4>
              <p>Design, Digital Strategy, Web-App, Digitalization, Product Management, Coding</p>
            </div>

            <div className="border p-4 rounded">
              <img src="/images/MusicStudio.jpg" alt="Work 2" className="mb-2" />
              <h4 className="font-semibold">Music Studio Re-branding</h4>
              <p>Coding, Design, Digital Strategy, Web-App, Product Management, Digital Marketing</p>
            </div>

          </div>

          

          

          <div className="mt-8 text-right">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition-colors duration-300"
            >
              View more products
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
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
                I am an experienced Product Manager, start up founder, and business developer with over ten years of
                expertise in digital, particularly within startup environments and in digital transformation settings.
                My background includes a strong focus on product and business development, user experience (UX/UI), and data-driven
                decision-making.
              </p>
              <p className="text-base leading-relaxed mt-4">
                My career has been marked by a deep commitment to simplifying complex digital experiences for
                non-tech-savvy clients, across multiple industries. I have extensive experience developing new products and markets, analyzing product user data,
                transforming customer feedback into actionable insights, and succefully launching new products and processes across complex organizational structures and in new markets.
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
