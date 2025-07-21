import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = ({ toggleSidebar, onLogout, isAuthenticated, onOpenLogin }) => {
  return (
    <header className="gov-header">
      <Container fluid>
        <Row className="align-items-center compact-header-row">
          <Col xs={3} className="d-flex align-items-center">
            <button 
              className="menu-toggle-btn me-3"
              onClick={toggleSidebar}
              aria-label="Toggle Menu"
            >
              <i className="fas fa-bars"></i>
            </button>
            <img src="/indian-rail.png" alt="Indian Railways" className="header-logo compact-logo" />
          </Col>
          <Col xs={6} className="compact-title-section">
            <h1 className="compact-site-title">
              <span className="first-letter">S</span>afety <span className="first-letter">I</span>nformation <span className="first-letter">M</span>anagement <span className="first-letter">S</span>ystem
            </h1>
          </Col>
          <Col xs={3} className="d-flex align-items-center justify-content-end">
            <img src="/cris_logo.png" alt="CRIS" className="header-logo compact-logo me-3" />
            <img src="/Emblem_of_India.png" alt="Government of India" className="header-logo compact-logo" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;