import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import CaseStudies from './components/CaseStudies';
import CaseStudyDetails from './components/CaseStudyDetails';
import ContactMe from './components/ContactMe';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/casestudies" element={<CaseStudies />} /> 
        <Route path="/casestudydetails" element={<CaseStudyDetails />} />  
        <Route path="/contactme" element={<ContactMe />} /> 
        <Route path="/products" element={<Products />} />      
      </Routes>
    </Router>
  );
}

export default App;
