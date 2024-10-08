import React from 'react';
import Hero from './Hero'; // Import the Hero component
import Footer from './Footer'; // Import the Footer component
import Header from './Header';

const Interhome = () => {
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
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Vacation Home Owner Web App</h2>
          <p className="mb-8 text-center">A Europe-leading vacation home operator with over 20.000 vacation homes across Europe contacted me as they needed help to rebuild their digital solutions for their homeowners. They were stuck in offline processes that could not scale and they had low user adoption in existing tools.</p>
          
          <div className="mb-8">
            <img 
              src="/images/LoginPage.png" 
              alt="Booking calendar" 
              className="w-full max-w-md mx-auto rounded-lg" 
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
          <p className="mb-8">The existing product faced challenges with user retention, complex navigation, and an outdated design that hindered its potential for growth. The goal was clear - to create a visually appealing, user-friendly platform that not only attracted more users but also enabled revenue growth and automation of offline processes.</p>

          <h3 className="text-2xl font-semibold mb-4">Solution</h3>
          <p className="mb-8">The team and I embarked on a comprehensive redesign journey. We began with a thorough analysis of user behaviors, identifying pain points and areas of improvement. We also mapped out user journeys and core business processes to get an overview of priorities. The first KPI was User Adoption. Followed by Happiness, Engagement, Retention and Task success. These KPIs gave us a clear direction for our priorities after the first release.</p>

          <div className="mb-8">
            <img 
              src="/images/homePage.png" 
              alt="Opportunities" 
              className="w-full max-w-lg mx-auto rounded-lg" 
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4">Results</h3>
          <p className="mb-8">The impact of the redesign was immediate and significant. Within the first three months of the relaunch, the new product experienced a 300% increase in user adoption. Users became active within the product, and retention rates skyrocketed. The business now have a centralized home-owner platform from which they can automate operational heavy processes and tasks while empowering their home-owners with data, actionable tasks and centralized communication.</p>

          <blockquote className="italic text-lg text-center bg-gray-100 p-4 rounded-lg">
            "I had the opportunity to work under Niklas's management. He is undoubtedly the best manager I ever had. His supportive, willingness to win in combination with his human approach made me feel very comfortable and motivated. Niklas not only spoke empathy, but also showed it. I learned a lot by working for Niklas and he has shown me the true qualities of being a good manager. I can only give him my warmest recommendations for the future. He is a great asset to any team."
            <div className="text-center mt-4">
              <img 
                src="/images/referencePic3.jpeg" 
                alt="Reference" 
                className="inline-block rounded-full w-16 h-16 mt-4" 
              />
              <p className="text-gray-700 mt-2">Max Ziegler, KAM at Out Of Home</p>
            </div>
          </blockquote>

          <div className="mt-8">
            <img 
              src="/images/YourOppurtunitiesPage.png" 
              alt="Inbox" 
              className="w-full max-w-lg mx-auto rounded-lg" 
            />
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Interhome;
