import React from 'react';

const ContentSection = () => {
  return (
    <section className="content-section">
      <div className="section-header">
        <h2>Safety Information Management System</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="content-text">
        <p>
          The Safety Information Management System (SIMS) is a comprehensive digital platform 
          developed by the Centre for Railway Information Systems (CRIS) to enhance railway 
          safety management across the Indian Railways network. This advanced system serves 
          as a centralized hub for collecting, analyzing, and disseminating critical safety 
          information to ensure the highest standards of railway operations.
        </p>

        <p>
          SIMS integrates various safety-related data sources, including accident reports, 
          safety circulars, inspection records, and preventive maintenance schedules. The 
          system provides real-time monitoring capabilities, enabling railway officials to 
          make informed decisions and implement proactive safety measures across the network.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4>Safety Monitoring</h4>
            <p>Real-time monitoring of safety parameters across the railway network</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h4>Data Analytics</h4>
            <p>Advanced analytics for identifying trends and potential safety risks</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h4>Training Programs</h4>
            <p>Comprehensive safety training and awareness programs</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h4>Mobile Access</h4>
            <p>Access safety information anytime, anywhere through mobile devices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;