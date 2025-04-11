import React from 'react';
import LogoutButton from '../authentication/LogoutButton';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>Welcome to SaaS Analytics</h1>
      </div>
      <div className="navbar-right">
        <LogoutButton />
      </div>
    </header>
  );
};

export default Navbar;