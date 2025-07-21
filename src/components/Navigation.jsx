import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar-inverse" fixed={false}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">
              <i className="fas fa-home"></i> Home
            </Nav.Link>
            
            <NavDropdown title={<><i className="fas fa-exclamation-triangle"></i> Accident Reports</>} id="accident-dropdown">
              <NavDropdown.Item href="#accident-reports">
                <i className="fas fa-file-alt"></i> View Reports
              </NavDropdown.Item>
              <NavDropdown.Item href="#accident-analysis">
                <i className="fas fa-chart-line"></i> Analysis
              </NavDropdown.Item>
              <NavDropdown.Item href="#accident-prevention">
                <i className="fas fa-shield-alt"></i> Prevention
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<><i className="fas fa-clipboard-list"></i> Safety Circulars</>} id="safety-dropdown">
              <NavDropdown.Item href="#safety-circulars">
                <i className="fas fa-file-text"></i> Current Circulars
              </NavDropdown.Item>
              <NavDropdown.Item href="#safety-guidelines">
                <i className="fas fa-book"></i> Guidelines
              </NavDropdown.Item>
              <NavDropdown.Item href="#safety-updates">
                <i className="fas fa-bell"></i> Updates
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<><i className="fas fa-bullhorn"></i> Safety Campaigns</>} id="campaigns-dropdown">
              <NavDropdown.Item href="#current-campaigns">
                <i className="fas fa-calendar"></i> Current Campaigns
              </NavDropdown.Item>
              <NavDropdown.Item href="#campaign-materials">
                <i className="fas fa-images"></i> Materials
              </NavDropdown.Item>
              <NavDropdown.Item href="#campaign-results">
                <i className="fas fa-chart-bar"></i> Results
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#public-info">
              <i className="fas fa-info-circle"></i> Public Information
            </Nav.Link>

            <Nav.Link href="#contact">
              <i className="fas fa-envelope"></i> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;