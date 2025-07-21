import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

const LoginModal = ({ show, onClose, onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    captcha: ''
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

    if (!credentials.username || !credentials.password || !credentials.captcha) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const success = onLogin(credentials);
    
    if (!success) {
      setError('Invalid credentials or captcha');
    }
    
    setLoading(false);
  };

  const refreshCaptcha = () => {
    // In a real app, this would generate a new captcha
    console.log('Refreshing captcha...');
  };

  return (
    <Modal show={show} onHide={onClose} centered className="login-modal">
      <Modal.Header className="login-modal-header">
        <div className="d-flex align-items-center">
          <i className="fas fa-user me-2"></i>
          <span className="fw-bold">SIGN IN</span>
        </div>
        <div className="d-flex align-items-center">
          <i className="fas fa-question-circle me-2"></i>
          <span>HELP</span>
        </div>
      </Modal.Header>
      
      <Modal.Body className="p-4">
        {error && (
          <Alert variant="danger" className="mb-3">
            <i className="fas fa-exclamation-triangle me-2"></i>
            {error}
          </Alert>
        )}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">User Id:</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
              <Form.Control
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Enter User Id here"
                className="login-modal-input"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Password:</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <Form.Control
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter Password here"
                className="login-modal-input"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Captcha:</Form.Label>
            <div className="captcha-container mb-2">
              <div className="captcha-display">
                <span className="captcha-text">2805</span>
                <button 
                  type="button" 
                  className="captcha-refresh"
                  onClick={refreshCaptcha}
                >
                  <i className="fas fa-sync-alt"></i>
                </button>
              </div>
            </div>
            <Form.Control
              type="text"
              name="captcha"
              value={credentials.captcha}
              onChange={handleChange}
              placeholder="Enter above text here"
              className="login-modal-input"
            />
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button 
              type="submit" 
              className="login-modal-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin me-2"></i>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            
            <a href="#" className="forgot-password-link">
              Forgot Password ?
            </a>
          </div>
        </Form>
      </Modal.Body>
      
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;