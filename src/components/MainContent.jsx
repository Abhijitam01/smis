import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentSection from './ContentSection';
import PartnerLogos from './PartnerLogos';

const MainContent = () => {
  return (
    <main className="main-content">
      <Container>
        <Row>
          <Col lg={8}>
            <ContentSection />
          </Col>
          <Col lg={4}>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-card-header">
                  <i className="fas fa-chart-line"></i>
                  <h4>Safety Statistics</h4>
                </div>
                <div className="info-card-body">
                  <div className="stat-item">
                    <span className="stat-number">99.8%</span>
                    <span className="stat-label">Safety Record</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Monitoring</span>
                  </div>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-card-header">
                  <i className="fas fa-bell"></i>
                  <h4>Recent Updates</h4>
                </div>
                <div className="info-card-body">
                  <div className="update-item">
                    <span className="update-date">Jan 15, 2024</span>
                    <p>New safety circular released for winter operations</p>
                  </div>
                  <div className="update-item">
                    <span className="update-date">Jan 10, 2024</span>
                    <p>Updated emergency response protocols</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <PartnerLogos />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default MainContent;