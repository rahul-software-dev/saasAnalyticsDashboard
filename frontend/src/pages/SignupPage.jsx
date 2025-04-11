import React from 'react';
import SignupForm from '../components/authentication/SignupForm';
import PageHeader from '../components/common/PageHeader';

const SignupPage = () => {
  return (
    <div className="auth-container">
      <PageHeader title="Sign Up" subtitle="Create your account" />
      <SignupForm />
    </div>
  );
};

export default SignupPage;