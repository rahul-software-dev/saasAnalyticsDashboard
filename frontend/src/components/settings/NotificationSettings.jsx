import React, { useState } from 'react';

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    productUpdates: true,
    weeklyReports: false,
    loginAlerts: true
  });

  const handleToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    // Send updated settings to backend
  };

  return (
    <div>
      <h3>Notification Preferences</h3>
      {Object.keys(notifications).map(key => (
        <div key={key}>
          <label>{key}</label>
          <input
            type="checkbox"
            checked={notifications[key]}
            onChange={() => handleToggle(key)}
          />
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NotificationSettings;