import React, { useState } from 'react';

const ProfileSettings = () => {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send update request
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Profile</h3>
      <label>Name</label>
      <input type="text" name="name" value={form.name} onChange={handleChange} />
      <label>Email</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProfileSettings;