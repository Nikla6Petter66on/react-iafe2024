// src/components/CaseStudyDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Hero from './Hero';
import Footer from './Footer';
import Header from './Header';
import caseStudiesData from '../data/caseStudiesData'; // Import the data

const CaseStudyDetails = () => {
  const { id } = useParams();
  const caseStudy = caseStudiesData[id];

  if (!caseStudy) {
    return <div>Case Study not found.</div>;
  }

  return (
    <div className="bg-black text-white">
      <Header />
      <Hero backgroundImage={caseStudy.backgroundImage} title={caseStudy.title} />

      {caseStudy.sections.map((section, index) => (
        <section className="bg-white text-black py-16 px-8" key={index}>
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">{section.heading}</h2>
            <img src={section.image} alt={section.heading} className="rounded-lg mb-6" />
            <p className="text-gray-800">{section.text}</p>
          </div>
        </section>
      ))}

      <section className="bg-white text-black py-8">
        <div className="container mx-auto text-center">
          <blockquote className="italic text-lg">{caseStudy.quote.text}</blockquote>
          <img src={caseStudy.quote.image} alt={caseStudy.quote.author} className="inline-block rounded-full w-16 h-16 mt-4" />
          <p className="text-gray-700 mt-2">{caseStudy.quote.author}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetails;
