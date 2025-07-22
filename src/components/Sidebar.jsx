import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar, isAuthenticated, onOpenLogin, onLogout }) => {
  const menuItems = [
    {
      title: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      link: '#dashboard',
      submenu: []
    },
    {
      title: 'Accident Reports',
      icon: 'fas fa-exclamation-triangle',
      link: '#accident-reports',
      submenu: [
        { title: 'View Reports', link: '#view-reports', icon: 'fas fa-file-alt' },
        { title: 'Analysis', link: '#analysis', icon: 'fas fa-chart-line' },
        { title: 'Prevention', link: '#prevention', icon: 'fas fa-shield-alt' }
      ]
    },
    {
      title: 'Safety Circulars',
      icon: 'fas fa-clipboard-list',
      link: '#safety-circulars',
      submenu: [
        { title: 'Current Circulars', link: '#current-circulars', icon: 'fas fa-file-text' },
        { title: 'Guidelines', link: '#guidelines', icon: 'fas fa-book' },
        { title: 'Updates', link: '#updates', icon: 'fas fa-bell' }
      ]
    },
    {
      title: 'Safety Campaigns',
      icon: 'fas fa-bullhorn',
      link: '#safety-campaigns',
      submenu: [
        { title: 'Current Campaigns', link: '#current-campaigns', icon: 'fas fa-calendar' },
        { title: 'Materials', link: '#materials', icon: 'fas fa-images' },
        { title: 'Results', link: '#results', icon: 'fas fa-chart-bar' }
      ]
    },
    {
      title: 'Public Information',
      icon: 'fas fa-info-circle',
      link: '#public-info',
      submenu: []
    },
    {
      title: 'Contact',
      icon: 'fas fa-envelope',
      link: '#contact',
      submenu: []
    }
  ];

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
      <nav className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>SIMS Menu</h3>
          <button className="sidebar-close" onClick={toggleSidebar}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.link} className="menu-link">
                <i className={item.icon}></i>
                <span>{item.title}</span>
                {item.submenu.length > 0 && <i className="fas fa-chevron-right submenu-arrow"></i>}
              </a>
              {item.submenu.length > 0 && (
                <ul className="submenu">
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex}>
                      <a href={subitem.link} className="submenu-link">
                        <i className={subitem.icon}></i>
                        <span>{subitem.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        
        {/* Login/Logout Section */}
        <div className="sidebar-auth">
          {!isAuthenticated ? (
            <button 
              className="sidebar-login-btn"
              onClick={onOpenLogin}
            >
              <i className="fas fa-sign-in-alt"></i>
              <span>Login</span>
            </button>
          ) : (
            <button 
              className="sidebar-logout-btn"
              onClick={onLogout}
            >
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;