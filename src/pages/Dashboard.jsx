import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HeroCarousel from '../components/HeroCarousel';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const Dashboard = ({ isAuthenticated, onLogout, onOpenLogin }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard">
      <Header 
        toggleSidebar={toggleSidebar} 
        onLogout={onLogout}
        onOpenLogin={onOpenLogin}
        isAuthenticated={isAuthenticated}
      />
      <div className="main-layout">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`content-area ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <HeroCarousel />
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;