import React from 'react';
import Hero from './Hero'; // Import the Hero component
import Footer from './Footer'; // Import the Footer component
import Header from './Header'; // Import the Header component

const AboutMe = () => {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero
        backgroundImage="/path-to-your-hero-image.jpg" // Ensure to replace this with your actual image path
        title="About me."
        subtitle="Are you passionate about shaping the digital future and pushing the boundaries of innovation?"
      />

      {/* Work with Me Section */}
      <section className="bg-white text-black py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Work with me</h2>
          <p className="mb-8">
            I am always on the lookout for creative ideas, difficult problems to solve or exciting challenges. 
            As a trailblazer in the world of IT and design, I believe in fostering a collaborative environment where your ideas can thrive 
            and the opportunity and potential of your idea can flourish.
          </p>

          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src="/images/niklasProfile.jpg" 
              alt="Profile" 
              className="rounded-lg shadow-md w-1/3 h-auto object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Why Work with Me Section */}
      <section className="bg-gray-100 text-black py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why work with me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {/* Innovation meets business development */}
            <div className="p-8 bg-white shadow-md rounded-lg">
              <i className="fas fa-handshake fa-3x mb-4 text-yellow-500"></i>
              <h3 className="text-xl font-semibold mb-4">Innovation meets business development</h3>
              <p>Creative processes and ideas that lead to real results. Millions of EUR in funding acquired, million EUR deals closed, and successful products built up from scratch multiple times.</p>
            </div>

            {/* Leadership */}
            <div className="p-8 bg-white shadow-md rounded-lg">
              <i className="fas fa-leaf fa-3x mb-4 text-yellow-500"></i>
              <h3 className="text-xl font-semibold mb-4">Leadership</h3>
              <p>Natural leadership and vast experience in building successful product and business development teams.</p>
            </div>

            {/* Technology */}
            <div className="p-8 bg-white shadow-md rounded-lg">
              <i className="fas fa-microchip fa-3x mb-4 text-yellow-500"></i>
              <h3 className="text-xl font-semibold mb-4">Technology</h3>
              <p>Full stack coding experience and capabilities.</p>
            </div>
          </div>
          <section className="flex justify-end p-8 text-black">
      </section>
        </div>
      </section>

     

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutMe;
