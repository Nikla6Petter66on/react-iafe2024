import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

const Services = () => {
  return (
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <Hero 
        title="Services."
        backgroundImage="/images/your-background-image.jpg"
      />

      {/* Services Section */}
      <section className="bg-white text-black py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">1. Digital Product Strategy & Planning</h3>
              <p className="mb-4">
                I will provide a comprehensive product roadmap, customer journey maps, and OKRs/KPIs setup to align your product vision with business goals and user needs.
              </p>
              <ul className="list-disc ml-4">
                <li>Product roadmap development</li>
                <li>Customer personas and journey maps</li>
                <li>OKR and KPI setup</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">2. UX/UI Design & Prototyping</h3>
              <p className="mb-4">
                I create engaging user experiences through wireframes, mockups, and interactive prototypes, ensuring seamless user journeys.
              </p>
              <ul className="list-disc ml-4">
                <li>Wireframes, mockups, and prototypes</li>
                <li>Design system and UI components</li>
                <li>User testing and iteration</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">3. Full-Stack Application Development</h3>
              <p className="mb-4">
                I build scalable, efficient full-stack applications, integrating databases and APIs for a seamless user experience.
              </p>
              <ul className="list-disc ml-4">
                <li>Front-end and back-end development</li>
                <li>Database integration and API management</li>
                <li>Cloud deployment and management</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">4. Data Strategy & Integration</h3>
              <p className="mb-4">
                I create data architectures and integrate analytics tools, enabling you to gather insights and monitor product performance effectively.
              </p>
              <ul className="list-disc ml-4">
                <li>Data architecture and database design</li>
                <li>Analytics tools integration</li>
                <li>Data visualization dashboards</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">5. Agile Product Management & Scaling</h3>
              <p className="mb-4">
                I implement agile frameworks and scalability planning to support your product's growth, ensuring efficient and effective product delivery.
              </p>
              <ul className="list-disc ml-4">
                <li>Agile frameworks and development sprints</li>
                <li>Project management tools setup</li>
                <li>Scalability planning and cloud optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
