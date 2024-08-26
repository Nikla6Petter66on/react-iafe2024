import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />}>
          <Route path="foundation" element={<Foundation />} />
          <Route path="exploration" element={<Exploration />} />
          <Route path="development-testing" element={<DevelopmentTesting />} />
          <Route path="launch" element={<Launch />} />
        </Route>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/casestudies" element={<CaseStudies />} /> 
        <Route path="/casestudydetails" element={<CaseStudyDetails />} />  
        <Route path="/contactme" element={<ContactMe />} /> 
      </Routes>
    </Router>
  );
}

export default App;
