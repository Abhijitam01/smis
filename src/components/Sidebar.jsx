import React from 'react';

const Sidebar = () => {
  const sidebarItems = [
    {
      title: 'Accident Reports',
      icon: 'fas fa-exclamation-triangle',
      link: '#accident-reports',
      className: 'art-arme-btn'
    },
    {
      title: 'Safety Circulars',
      icon: 'fas fa-clipboard-list',
      link: '#safety-circulars',
      className: 'safety-circulars-btn'
    },
    {
      title: 'Safety Campaigns',
      icon: 'fas fa-bullhorn',
      link: '#safety-drives',
      className: 'safety-drives-btn'
    },
    {
      title: 'Public Information',
      icon: 'fas fa-info-circle',
      link: '#public-info',
      className: 'public-info-btn'
    }
  ];

  return (
    <div className="sidebar-left">
      <div className="sidebar-buttons">
        {sidebarItems.map((item, index) => (
          <div key={index} className={`sidebar-btn ${item.className}`}>
            <a href={item.link}>
              <i className={item.icon}></i>
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;