import React, { useState } from 'react';

const TenantSettings = () => {
  const [tenantName, setTenantName] = useState('');
  const [theme, setTheme] = useState('light');

  const handleSave = () => {
    // Save tenant-specific preferences
  };

  return (
    <div>
      <h3>Tenant Preferences</h3>
      <label>Tenant Name</label>
      <input type="text" value={tenantName} onChange={(e) => setTenantName(e.target.value)} />
      <label>Theme</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TenantSettings;