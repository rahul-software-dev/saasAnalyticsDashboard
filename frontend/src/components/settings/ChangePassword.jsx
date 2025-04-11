import React, { useState } from 'react';

const ChangePassword = () => {
  const [form, setForm] = useState({ current: '', new: '', confirm: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.new !== form.confirm) {
      alert('Passwords do not match');
      return;
    }
    // Submit to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Change Password</h3>
      <input type="password" name="current" placeholder="Current Password" value={form.current} onChange={handleChange} />
      <input type="password" name="new" placeholder="New Password" value={form.new} onChange={handleChange} />
      <input type="password" name="confirm" placeholder="Confirm New Password" value={form.confirm} onChange={handleChange} />
      <button type="submit">Update Password</button>
    </form>
  );
};

export default ChangePassword;