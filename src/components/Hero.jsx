import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Poornima Palace</h1>
        <h2>Elegance & Luxury for Your Special Moments</h2>
        <p>Experience the perfect blend of traditional charm and modern luxury for weddings, receptions, and corporate events</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Book Your Event</a>
          <a href="#gallery" className="btn btn-secondary">Explore Venue</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 