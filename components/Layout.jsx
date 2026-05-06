// Layout.js
import React from 'react';
import Sidebar from './Sidebar.jsx';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        {/* Top Header */}
        <header className="admin-header">
          {/* Mobile Menu Toggle */}
          <button className="admin-menu-toggle">
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Spacer */}
          <div className="admin-header-spacer" />

          {/* Right Actions */}
          <div className="admin-header-actions">
            <button className="admin-notification-button">
              <span className="material-symbols-outlined">notifications</span>
              <span className="admin-notification-dot" />
            </button>
          </div>
        </header>

        {/* Main Content Scroll Area */}
        <main className="admin-content">
          <div className="admin-content-inner">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;