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
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="fade-carousel">
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        fade
        controls={true}
        indicators={true}
        interval={null}
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx} className="slides">
            <div 
              className={`slide-${idx + 1}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                position: 'relative'
              }}
            >
              <div className="carousel-banner">
                <hgroup>
                  <h1>{slide.title}</h1>
                  <h3>{slide.subtitle}</h3>
                  <h4>{slide.description}</h4>
                </hgroup>
                <button className="btn btn-carousel-banner">Learn More</button>
                <button className="btn btn-carousel-banner">Get Started</button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;