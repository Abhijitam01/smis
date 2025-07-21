import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!credentials.username || !credentials.password) {
      setError('Please enter both username and password');
      setLoading(false);
      return;
    }

    const success = onLogin(credentials);
    
    if (!success) {
      setError('Invalid username or password');
    }
    
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <img src="/indian-rail.png" alt="Indian Railways" className="login-logo" />
            </Col>
            <Col xs="auto">
              <img src="/cris_logo.png" alt="CRIS" className="login-logo" />
            </Col>
            <Col xs="auto" className="text-center">
              <h1 className="login-title">Safety Information Management System</h1>
              <p className="login-subtitle">Centre for Railway Information Systems</p>
            </Col>
            <Col xs="auto">
              <img src="/Emblem_of_India.png" alt="Government of India" className="login-logo" />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="login-container">
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="login-card">
              <Card.Header className="login-card-header">
                <h3 className="text-center mb-0">
                  <i className="fas fa-lock me-2"></i>
                  Secure Login
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                {error && (
                  <Alert variant="danger" className="mb-3">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    {error}
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <i className="fas fa-user me-2"></i>
                      Username
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      placeholder="Enter your username"
                      className="login-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>
                      <i className="fas fa-key me-2"></i>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="login-input"
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    className="login-btn w-100"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        Signing In...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Sign In
                      </>
                    )}
                  </Button>
                </Form>

                <div className="login-help mt-4">
                  <div className="text-center">
                    <small className="text-muted">
                      Demo Credentials: admin / password
                    </small>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <div className="login-footer mt-4">
              <div className="text-center">
                <small className="text-muted">
                  © 2024 Centre for Railway Information Systems (CRIS)
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;