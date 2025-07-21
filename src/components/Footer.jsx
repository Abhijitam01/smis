import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Safety Reports', href: '#reports' },
    { name: 'Circulars', href: '#circulars' },
    { name: 'Campaigns', href: '#campaigns' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' }
  ];

  return (
    <footer className="gov-footer">
      <Container>
        <Row>
          <Col md={6}>
            <div className="footer-info">
              <h5>Safety Information Management System</h5>
              <p>Centre for Railway Information Systems (CRIS)</p>
              <p>Government of India</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="footer-links">
              <h6>Quick Links</h6>
              <ul>
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footer-bottom">
              <p>&copy; 2024 Centre for Railway Information Systems (CRIS). All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;