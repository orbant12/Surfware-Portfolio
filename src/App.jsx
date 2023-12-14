import React from 'react';

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import NavBar from './pages/NavBar';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
//import UserAuthContext from './context/UserAuthContext';

function App() {

return ( 

//<UserAuthContext>   
  <Router>
    <NavBar /> 
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
      
  </Router>
  
//</UserAuthContext>
)}

export default App
