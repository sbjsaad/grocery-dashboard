import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-main">
        <h1>Contact Us</h1>
        <p>Get in touch with FreshMart. We'd love to hear from you!</p>
        <div className="contact-info">
          <p>📞 Phone: +1 234 567 890</p>
          <p>✉️ Email: support@freshmart.com</p>
          <p>🏠 Address: 123 Grocery Street, Food City, FC 12345</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;