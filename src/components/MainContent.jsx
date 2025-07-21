import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ContentSection from './ContentSection';
import PartnerLogos from './PartnerLogos';

const MainContent = () => {
  return (
    <div className="main-content">
      <Container>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6}>
            <ContentSection />
            <PartnerLogos />
          </Col>
          <Col md={3}>
            <div className="sidebar-right">
              {/* Additional sidebar content can go here */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;