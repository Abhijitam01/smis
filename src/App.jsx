import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Dashboard from './pages/Dashboard';
import LoginModal from './components/LoginModal';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = (credentials) => {
    // Simple authentication logic - in real app, this would call an API
    if (credentials.username === 'admin' && credentials.password === 'password' && credentials.captcha === '2805') {
      setIsAuthenticated(true);
      setShowLoginModal(false);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <Dashboard 
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout} 
                onOpenLogin={openLoginModal}
              />
            } 
          />
        </Routes>
        
        <LoginModal 
          show={showLoginModal}
          onClose={closeLoginModal}
          onLogin={handleLogin}
        />
      </div>
    </Router>
  );
}

export default App;