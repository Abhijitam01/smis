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

  const visibleLogos = 3;
  const maxIndex = Math.max(0, partners.length - visibleLogos);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="partner-logos-section">
      <h3 className="content-title">Our Partners</h3>
      <div className="logos-container">
        <button className="slider-btn" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="partner-logos-wrapper">
          <div 
            className="partner-logos-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleLogos)}%)`
            }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo-item">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-img"
                />
              </div>
            ))}
          </div>
        </div>
        
        <button className="slider-btn" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PartnerLogos;