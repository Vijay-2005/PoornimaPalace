import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <div className="divider"></div>
          <p>Get in Touch to Book Your Event or Schedule a Visit</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Poornima Palace</h3>
            <div className="info-item">
              <strong>Address:</strong>
              <p>123 Celebration Avenue, Wedding District<br />Joytown, 56789</p>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <p>+1 (234) 567-8900</p>
            </div>
            <div className="info-item">
              <strong>Email:</strong>
              <p>info@poornimapalace.com</p>
            </div>
            <div className="info-item">
              <strong>Hours:</strong>
              <p>Monday - Saturday: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 6:00 PM</p>
            </div>
            
            <div className="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9375111162287!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzMwLjAiTiAxMjLCsDI1JzEwLjAiVw!5e0!3m2!1sen!2sus!4v1683924296777!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Poornima Palace Location"
              ></iframe>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Book Your Event</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="reception">Reception</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <input 
                  type="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Tell us about your event"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 