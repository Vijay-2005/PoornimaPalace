import React, { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: 'Grand Hall'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
      title: 'Ceremony Setup'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1519741347686-c1e331c35ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Luxury Decoration'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
      title: 'Evening Reception'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: 'Wedding Setup'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: 'Entertainment Area'
    }
  ];

  const openLightbox = (id) => {
    setActiveImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  const activeImageData = galleryImages.find(img => img.id === activeImage);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Our Gallery</h2>
          <div className="divider"></div>
          <p>Explore the Beauty and Elegance of Poornima Palace</p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              className="gallery-item" 
              key={image.id}
              onClick={() => openLightbox(image.id)}
            >
              <img src={image.url} alt={image.title} />
              <div className="gallery-item-overlay">
                <h3>{image.title}</h3>
                <span className="view-icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {activeImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-lightbox">&times;</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeImageData.url} alt={activeImageData.title} />
            <h3>{activeImageData.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 