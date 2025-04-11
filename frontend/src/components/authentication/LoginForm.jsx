import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      onLoginSuccess && onLoginSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <label>Email:</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <label>Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;