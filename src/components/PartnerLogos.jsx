import React, { useState } from 'react';

const PartnerLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { name: 'Digital India', logo: '/digitalindia.png' },
    { name: 'Government of India', logo: '/india-gov.png' },
    { name: 'NDMA', logo: '/ndma.png' },
    { name: 'NDRF', logo: '/ndrf.png' },
    { name: 'NIDM', logo: '/nidm.png' },
    { name: 'Indian Railways', logo: '/indian-rail.png' },
    { name: 'CRIS', logo: '/cris_logo.png' }
  ];

  const visibleLogos = 4;
  const maxIndex = Math.max(0, partners.length - visibleLogos);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="partner-section">
      <div className="section-header">
        <h3>Our Partners</h3>
        <div className="section-divider"></div>
      </div>
      
      <div className="partner-carousel">
        <button className="carousel-nav prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="partner-container">
          <div 
            className="partner-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleLogos)}%)`
            }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="partner-item">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
        
        <button className="carousel-nav next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default PartnerLogos;