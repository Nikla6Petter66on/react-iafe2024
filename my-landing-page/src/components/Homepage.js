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
<section className="p-8 bg-white text-black flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-md">
        {/* Icon placeholder - replace with actual icon */}
      </div>
      <span className="text-lg font-semibold">Mobile apps</span>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-md">
        {/* Icon placeholder - replace with actual icon */}
      </div>
      <span className="text-lg font-semibold">Web design</span>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-md">
        {/* Icon placeholder - replace with actual icon */}
      </div>
      <span className="text-lg font-semibold">Digital strategy</span>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-md">
        {/* Icon placeholder - replace with actual icon */}
      </div>
      <span className="text-lg font-semibold">Development</span>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-md">
        {/* Icon placeholder - replace with actual icon */}
      </div>
      <span className="text-lg font-semibold">Digitalization</span>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-md">
        {/* Icon placeholder - replace with actual icon */}
      </div>
      <span className="text-lg font-semibold">Web apps</span>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-md">
        {/* Icon placeholder - replace with actual icon */}
      </div>
      <span className="text-lg font-semibold">Design</span>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-md">
        {/* Icon placeholder - replace with actual icon */}
      </div>
      <span className="text-lg font-semibold">Consulting</span>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-md">
        {/* Icon placeholder - replace with actual icon */}
      </div>
      <span className="text-lg font-semibold">Startups</span>
    </div>
  </div>
</section>

        <section className="p-8 bg-gray-100 text-black">
          <h3 className="text-2xl font-bold mb-4">My works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded">
              <img src="/images/vacatioHomeAppImage.jpg" alt="Work 1" className="mb-2"/>
              <h4 className="font-semibold">Web app for vacation home owners</h4>
              <p>Digital module, React.js</p>
            </div>
            <div className="border p-4 rounded">
              <img src="/images/teamOffsiteBookingImage.jpg" alt="Work 2" className="mb-2"/>
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
            <img src="/images/niklasProfile.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-4"/>
            <div>
              <h4 className="text-xl font-semibold">Product Leader</h4>
              <p>I am an experienced Senior Product Manager, founder and business developer with over ten years of expertise in digital, particular within startup environments and in digital transformation settings. My background includes a strong focus on product development, user experience (UX/UI), and data-driven decision-making. I have successfully led cross-functional teams to deliver high quality, user-centric solutions from conceptualization to launch, ensuring aligment with company strategy and customer needs.
                My career has been marked by a deep commmitment to simplifying complex digital experiences for non-tech-savvy clients, particulary in the travel and hotel-tech sectors but also across other industries. I have extensive experience conducting market research, analyzing product usage data, and transforming customer feedback into actionable insights that drive product enhancements and improve user satisfaction. I have also experience in developing new markets via direct sales channels and I have closed million dollar deals across industries.
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
