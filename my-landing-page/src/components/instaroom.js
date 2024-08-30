import React from 'react';
import Hero from './Hero'; // Import the Hero component
import Footer from './Footer'; // Import the Footer component
import Header from './Header';

const Instaroom = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <Hero 
        backgroundImage="/path-to-your-image.jpg"
        title="Web app for vacation home owners." 
      />

      {/* Case Study Content */}
      <section className="bg-white text-black py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Travel Tech Startup</h2>
          <p className="mb-8">Chat-bot platform</p>
          
          <div className="mb-8">
            <img 
              src="/images/instaroomAssistant.png" 
              alt="Instaroom Assistant" 
              className="w-full rounded-lg"
              style={{ width: 'auto', maxHeight: '800px' }} 
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
          <p className="mb-8">Complex bookings (e.g a family booking with connecting rooms) are hard to book and to process for accomodation operators</p>

          <h3 className="text-2xl font-semibold mb-4">Solution</h3>
          <p className="mb-8">White-label/Customizable chat-bots that integrates to accommodation inventory via APIs and that is designed for booking and processing complex bookings</p>

          <div className="mb-8">
            <img 
              src="/images/instaroomAdminPanel.jpg" 
              alt="Opportunities" 
              className="w-full rounded-lg" 
              style={{ width: 'auto', maxHeight: '800px' }} 

            />
          </div>

          <h3 className="text-2xl font-semibold mb-4">Results</h3>
          <p className="mb-8">Millions of EUR in funding, 50+ hotel groups as customers, 400K+ EUR in sales, and hundreds of thousands of end-users</p>

          <blockquote className="italic text-lg text-center bg-gray-100 p-4 rounded-lg">
            "I had the opportunity to work under Niklas's management. He is undoubtedly the best manager I ever had. His supportive, willingness to win in combination with his human approach made me feel very comfortable and motivated. Niklas not only spoke empathy, but also showed it. I learned a lot by working for Niklas and he has shown me the true qualities of being a good manager. I can only give him my warmest recommendations for the future. He is a great asset to any team."
            <div className="text-center mt-4">
              <img 
                src="/images/referencePic3.jpeg" 
                alt="Reference" 
                className="inline-block rounded-full w-16 h-16 mt-4" 
              />
              <p className="text-gray-700 mt-2">Max Ziegler, Former KAM at Out Of Home</p>
              </div>
          </blockquote>

          <div className="mt-8">
            <img 
              src="/images/instaroomChatAdmin.jpg" 
              alt="Instaroom Booking Widget" 
              className="w-full rounded-lg" 
              style={{ width: 'auto', maxHeight: '1500px' }} 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Instaroom;
