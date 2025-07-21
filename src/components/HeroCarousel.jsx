import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      image: '/WhatsApp Image 2025-07-07 at 23.47.47.jpeg',
      title: 'Railway Safety Excellence',
      subtitle: 'Ensuring Safe and Secure Rail Transportation',
      description: 'Comprehensive safety management system for Indian Railways'
    },
    {
      image: '/WhatsApp Image 2025-07-07 at 23.42.52.jpeg',
      title: 'Advanced Safety Monitoring',
      subtitle: 'Real-time Safety Information Management',
      description: 'State-of-the-art technology for railway safety oversight'
    },
    {
      image: '/WhatsApp Image 2025-07-07 at 23.41.45.jpeg',
      title: 'Safety Training & Awareness',
      subtitle: 'Building a Culture of Safety',
      description: 'Comprehensive training programs for railway personnel'
    },
    {
      image: '/WhatsApp Image 2025-07-07 at 23.41.18.jpeg',
      title: 'Emergency Response Systems',
      subtitle: 'Rapid Response to Safety Incidents',
      description: 'Coordinated emergency response and management protocols'
    },
    {
      image: '/fb23574d-7bcd-4371-afe8-840462f3cb49.jpeg',
      title: 'Digital Safety Solutions',
      subtitle: 'Technology-Driven Safety Management',
      description: 'Modern digital solutions for comprehensive safety oversight'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Increased from 5000ms to 6000ms for smoother experience

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-carousel">
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        fade
        controls={true}
        indicators={true}
        interval={null}
        className="smooth-carousel"
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx} className="smooth-item">
            <div 
              className="carousel-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
                height: '500px'
              }}
            >
              <div className="carousel-overlay"></div>
              <div className="carousel-content">
                <div className="carousel-text">
                  <h2>{slide.title}</h2>
                  <h4>{slide.subtitle}</h4>
                  <p>{slide.description}</p>
                  <div className="carousel-buttons">
                    <button className="btn btn-primary">Learn More</button>
                    <button className="btn btn-outline">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;