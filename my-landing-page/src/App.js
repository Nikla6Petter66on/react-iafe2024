import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import CaseStudies from './components/CaseStudies';
import CaseStudyDetails from './components/CaseStudyDetails';
import ContactMe from './components/ContactMe';
import Products from './components/Products';
import Foundation from './components/Foundation';
import Exploration from './components/Exploration';
import DevelopmentTesting from './components/DevelopmentTesting';
import Launch from './components/Launch';
import Footer from './components/Footer';
import Instaroom from './components/instaroom';
import Interhome from './components/interhome';
import ScrollToTop from './components/ScrollToTop';
import Blog from './components/Blog';
import Services from './components/Services';


function App() {
  return (
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/products" element={<Products />}>
            <Route path="foundation" element={<Foundation />} />
            <Route path="exploration" element={<Exploration />} />
            <Route path="development-testing" element={<DevelopmentTesting />} />
            <Route path="launch" element={<Launch />} />
          </Route>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/casestudies" element={<CaseStudies />} /> 
          <Route path="/instaroom" element={<Instaroom />} /> 
          <Route path="/interhome" element={<Interhome />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
        </Routes>
    </Router>
  );
}

export default App;
