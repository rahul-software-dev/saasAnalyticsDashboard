import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from '../authentication/LoginForm';
import SignupForm from '../authentication/SignupForm';
import MainDashboard from '../dashboard/MainDashboard';
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <MainDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;