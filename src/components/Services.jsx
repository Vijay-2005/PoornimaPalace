import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: '🎊',
      title: 'Wedding Ceremonies',
      description: 'Elegant spaces for ceremonies with customizable decor and seating arrangements to match your vision.'
    },
    {
      icon: '🍽️',
      title: 'Reception Halls',
      description: 'Spacious halls with modern amenities perfect for grand receptions and celebration dinners.'
    },
    {
      icon: '🥂',
      title: 'Corporate Events',
      description: 'Professional settings for meetings, conferences, and corporate gatherings with all technical requirements.'
    },
    {
      icon: '🎭',
      title: 'Cultural Functions',
      description: 'Versatile spaces perfect for cultural performances, sangeet ceremonies, and traditional events.'
    },
    {
      icon: '📸',
      title: 'Photography Areas',
      description: 'Scenic spots and specially designed areas for capturing your most precious moments.'
    },
    {
      icon: '🍱',
      title: 'Premium Catering',
      description: 'Exquisite culinary experiences with customizable menus crafted by our expert chefs.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <div className="divider"></div>
          <p>Comprehensive Solutions for All Your Celebration Needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Looking for a Customized Package?</h3>
          <p>We offer tailored solutions to meet your specific requirements and budget.</p>
          <a href="#contact" className="btn-services">Get Custom Quote</a>
        </div>
      </div>
    </section>
  );
};

export default Services; 