import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Users', path: '/users' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Settings', path: '/settings' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>SaaS Dashboard</h2>
      </div>
      <nav>
        {navItems.map((item, index) => (
          <NavLink key={index} to={item.path} className="nav-link" activeClassName="active">
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;