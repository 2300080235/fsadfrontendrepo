import React from 'react';
import './ContactSection.css';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Get Your Instant Free Quote Now</h2>
          <p className="subtext"></p>
          <p className="description">
            You can also reach out by filling the form below. Our team will get back to you within 24 hours
          </p>
          <p className="phone">
            <FaPhoneAlt /> 0800 555 44 33
          </p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Phone" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="How can we help you? Feel free to get in touch!" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
