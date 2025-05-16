import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Poornima Palace</h2>
            <p>Creating Unforgettable Moments</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Wedding Ceremonies</a></li>
                <li><a href="#services">Reception Halls</a></li>
                <li><a href="#services">Corporate Events</a></li>
                <li><a href="#services">Cultural Functions</a></li>
                <li><a href="#services">Premium Catering</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Contact</h3>
              <ul className="footer-contact-info">
                <li>123 Celebration Avenue</li>
                <li>Wedding District</li>
                <li>Joytown, 56789</li>
                <li>info@poornimapalace.com</li>
                <li>+1 (234) 567-8900</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Pinterest</a>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {currentYear} Poornima Palace. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 