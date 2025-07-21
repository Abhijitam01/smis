import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = ({ toggleSidebar, onLogout }) => {
  return (
    <header className="gov-header">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={1} className="menu-toggle-col">
            <button 
              className="menu-toggle-btn"
              onClick={toggleSidebar}
              aria-label="Toggle Menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </Col>
          
          <Col xs={2} className="logo-col">
            <img src="/indian-rail.png" alt="Indian Railways" className="header-logo" />
          </Col>
          
          <Col xs={2} className="logo-col">
            <img src="/cris_logo.png" alt="CRIS" className="header-logo" />
          </Col>
          
          <Col xs={4} className="title-section">
            <h1 className="site-title">Safety Information Management System</h1>
            <p className="site-subtitle">Centre for Railway Information Systems</p>
          </Col>
          
          <Col xs={2} className="logo-col">
            <img src="/Emblem_of_India.png" alt="Government of India" className="header-logo" />
          </Col>
          
          <Col xs={1} className="user-actions">
            <div className="header-buttons">
              {!isAuthenticated && (
                <button 
                  className="sign-in-btn"
                  onClick={onOpenLogin}
                  title="Sign In"
                >
                  <i className="fas fa-user me-1"></i>
                  SIGN IN
                </button>
              )}
              {isAuthenticated && (
                <button 
                  className="logout-btn"
                  onClick={onLogout}
                  title="Logout"
                >
                  <i className="fas fa-sign-out-alt me-1"></i>
                  LOGOUT
                </button>
              )}
            </div>