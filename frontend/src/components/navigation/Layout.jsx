import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;