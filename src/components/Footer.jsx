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
    <footer>
      <Container>
        <Row>
          <Col md={12}>
            <div className="nav">
              <div className="container">
                <ul className="nav nav-pills nav-justified">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p style={{ color: '#cbd5e0', fontSize: '14px' }}>
              © 2024 Centre for Railway Information Systems (CRIS). All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;