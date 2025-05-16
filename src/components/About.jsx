import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Poornima Palace</h2>
          <div className="divider"></div>
          <p>A Legacy of Elegance and Celebration</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1519741347686-c1e331c35ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Poornima Palace Interior" />
          </div>
          <div className="about-text">
            <h3>The Perfect Venue for Your Special Occasions</h3>
            <p>
              Welcome to Poornima Palace, where dreams transform into cherished memories. Established in 2005, our convention center has been the hallmark of sophistication and grandeur for weddings and celebrations in the region.
            </p>
            <p>
              Our palace combines traditional architecture with modern amenities to create a space that is both timeless and contemporary. With meticulous attention to detail, we have designed every corner of our venue to exceed your expectations.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-number">15+</span>
                <p>Years of Excellence</p>
              </div>
              <div className="feature">
                <span className="feature-number">500+</span>
                <p>Weddings Hosted</p>
              </div>
              <div className="feature">
                <span className="feature-number">20,000</span>
                <p>Square Feet</p>
              </div>
            </div>
            <a href="#contact" className="btn-about">Schedule a Visit</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 