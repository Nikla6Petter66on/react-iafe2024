import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CaseStudies from './CaseStudies';


const Products = () => {
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


      {/* Featured Products */}
      <section className="p-8 bg-white text-black">
        <h3 className="text-2xl font-bold mb-4">Aditional examples of products I have developed</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded mt-auto">
            <img src="/images/interchalet.png" alt="Web app for vacation home owners" className="mb-2"/>
            <h4 className="font-semibold">Search and book vacation homes site</h4>
            <p className="text-gray-600"> #productmanagement #uxdesign #digitaltransformation #scrum</p>
          </div>
          <div className="border p-4 rounded">
            <img src="/images/instaroomChatPanel.jpg" alt="Web app for team offsite booking" className="mb-2"/>
            <h4 className="font-semibold">SaaS chat-bot platform</h4>
            <p className="text-gray-600">#startups #uxdesign #uidesign #productmanagement #fullstack #coding</p>
          </div>
        </div>
        <div className="mt-8 text-right">
          <Link to="/CaseStudies" className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition-colors duration-300">View case studies &rarr;</Link>
        </div>
      </section>

    {/* Reference/Quote Section */}
<section className="p-8 bg-gray-100 text-center text-black">
  <blockquote className="text-xl font-semibold italic text-gray-800 mb-4">
    "Niklas would be undoubtedly one of the greatest assets at any company, and he's my role model of how a manager and leader should be."
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


      {/* How I Work */}
      <section className="p-8 bg-white text-black">
        <h3 className="text-2xl font-bold mb-4">Fundamentals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-2">Collaborative Discovery</h4>
            <p>I believe in the power of collaboration. My process begins with a thorough and collaborative discovery phase, where we immerse ourselves in your business objectives and I ask a lot of questions. By understanding your vision, goals and challenges, we lay the foundation for a tailored and effective digital solution</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Agile Development</h4>
            <p>Lets embrace an agile development methodology that ensures flexibility and adaptability throughout the project lifecycle or for the infinity of the product. This iterative approach allows us to respond promptly to evolving requirements incorporate feedback seamlessly, and deliver high-quality solutions efficiently.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Transparent Communication</h4>
            <p>Transparent communication is the cornerstone of my stakeholder relationships. From project kickoff to delivery, I maintain open and honest communication channels. Regular updates, progress reports, and collaborative decision-making keep you informed and engaged at every stage.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Button */}
      <section className="flex justify-end p-8 bg-gray-100 text-black">
        <a href="/contact" className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md inline-flex items-center hover:bg-yellow-500 transition-colors duration-300">
        Get in touch
        </a>
      </section>

      <section className="p-8 bg-gray-100 text-black">
  <h3 className="text-2xl font-bold mb-4 text-center">Process</h3>
  <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-8">
    <div className="text-center">
      <div className="w-28 h-28 flex items-center justify-center rounded-full border-2 border-yellow-400 text-black mb-2 p-2 hover:bg-yellow-400 hover:text-black transition-colors duration-300">
        <span className="font-semibold text-sm">foundation</span>
      </div>
    </div>

    <span className="material-symbols-outlined text-4xl text-black hidden md:block">
      arrow_forward
    </span>

    <div className="text-center">
      <div className="w-28 h-28 flex items-center justify-center rounded-full border-2 border-yellow-400 text-black mb-2 p-2 hover:bg-yellow-400 hover:text-black transition-colors duration-300">
        <span className="font-semibold text-sm">exploration</span>
      </div>
    </div>

    <span className="material-symbols-outlined text-4xl text-black hidden md:block">
      arrow_forward
    </span>

    <div className="text-center">
      <div className="w-28 h-28 flex items-center justify-center rounded-full border-2 border-yellow-400 text-black mb-2 p-2 hover:bg-yellow-400 hover:text-black transition-colors duration-300">
        <span className="font-semibold text-sm text-center">development & testing</span>
      </div>
    </div>

    <span className="material-symbols-outlined text-4xl text-black hidden md:block">
      arrow_forward
    </span>

    <div className="text-center">
      <div className="w-28 h-28 flex items-center justify-center rounded-full border-2 border-yellow-400 text-black mb-2 p-2 hover:bg-yellow-400 hover:text-black transition-colors duration-300">
        <span className="font-semibold text-sm">launch</span>
      </div>
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

      <Footer />
    </div>
  );
};

export default Products;
