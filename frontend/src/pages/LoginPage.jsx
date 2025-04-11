import React from 'react';
import LoginForm from '../components/authentication/LoginForm';
import PageHeader from '../components/common/PageHeader';

const LoginPage = () => {
  return (
    <div className="auth-container">
      <PageHeader title="Login" subtitle="Access your dashboard" />
      <LoginForm />
    </div>
  );
};

export default LoginPage;