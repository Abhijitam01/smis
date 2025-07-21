import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="heading">
      <Container>
        <Row className="align-items-center">
          <Col md={2} id="railLogo">
            <img src="/indian-rail.png" alt="Indian Railways Logo" />
          </Col>
          <Col md={2} id="crisLogo">
            <img src="/cris_logo.png" alt="CRIS Logo" />
          </Col>
          <Col md={4} className="site-name">
            <h1>Safety Information Management System</h1>
            <h4>Centre for Railway Information Systems</h4>
          </Col>
          <Col md={2} id="emblem">
            <img src="/Emblem_of_India.png" alt="Government of India Emblem" />
          </Col>
          <Col md={2}>
            <img src="/logo1.png" alt="Additional Logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;