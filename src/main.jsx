import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Section1 from './components/Section1.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar/>
  <Hero/>
  <Section1/>
  <Testimonial/>
  <Footer/>
  </React.StrictMode>,
)
