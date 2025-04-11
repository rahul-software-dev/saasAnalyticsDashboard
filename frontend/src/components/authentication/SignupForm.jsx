import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    tenant: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/signup', formData);
      setMessage('Signup successful. You can now log in.');
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
      <label>Name:</label>
      <input name="name" value={formData.name} onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      <label>Tenant:</label>
      <input name="tenant" value={formData.tenant} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default SignupForm;