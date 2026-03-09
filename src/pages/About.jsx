import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <main className="about-main">
        <h1>About Us</h1>
        <p>
          Welcome to FreshMart! We are your trusted online grocery store, 
          committed to delivering fresh, high-quality products right to your doorstep.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;