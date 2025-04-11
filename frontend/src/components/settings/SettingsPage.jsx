import React, { useState } from 'react';
import ProfileSettings from './ProfileSettings';
import NotificationSettings from './NotificationSettings';
import ChangePassword from './ChangePassword';
import TenantSettings from './TenantSettings';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderTab = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'password':
        return <ChangePassword />;
      case 'tenant':
        return <TenantSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('profile')}>Profile</button>
        <button onClick={() => setActiveTab('notifications')}>Notifications</button>
        <button onClick={() => setActiveTab('password')}>Password</button>
        <button onClick={() => setActiveTab('tenant')}>Tenant</button>
      </div>
      <div className="settings-content">
        {renderTab()}
      </div>
    </div>
  );
};

export default SettingsPage;