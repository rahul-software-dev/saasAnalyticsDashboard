import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/forgot-password', { email });
      setStatus('Reset link sent. Please check your email.');
    } catch (err) {
      setStatus('Failed to send reset link.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Send Reset Link</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ForgotPasswordForm;