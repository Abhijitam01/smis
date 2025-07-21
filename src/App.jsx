import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroCarousel from './components/HeroCarousel';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />
        <div className="main-layout">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className={`content-area ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <HeroCarousel />
            <MainContent />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;