import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { TenantProvider } from './contexts/TenantContext';
import { Layout } from './components/Layout/Layout';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import RoleGuard from './components/Auth/RoleGuard';
import NotFoundPage from './pages/NotFoundPage';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import UserManagementPage from './pages/UserManagementPage';
import RoleManagementPage from './pages/RoleManagementPage';
import TenantManagementPage from './pages/TenantManagementPage';
import AuditLogsPage from './pages/AuditLogsPage';
import SettingsPage from './pages/SettingsPage';
import FeatureTogglePage from './pages/FeatureTogglePage';
import FeedbackPage from './pages/FeedbackPage';

function AppRoutes() {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
      <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <SignupPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />

        <Route
          path="users"
          element={
            <RoleGuard allowedRoles={['admin', 'manager']}>
              <UserManagementPage />
            </RoleGuard>
          }
        />
        <Route
          path="roles"
          element={
            <RoleGuard allowedRoles={['admin']}>
              <RoleManagementPage />
            </RoleGuard>
          }
        />
        <Route
          path="tenants"
          element={
            <RoleGuard allowedRoles={['admin']}>
              <TenantManagementPage />
            </RoleGuard>
          }
        />
        <Route
          path="audit-logs"
          element={
            <RoleGuard allowedRoles={['admin']}>
              <AuditLogsPage />
            </RoleGuard>
          }
        />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="feature-toggles" element={<FeatureTogglePage />} />
        <Route path="feedback" element={<FeedbackPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <TenantProvider>
          <AppRoutes />
        </TenantProvider>
      </AuthProvider>
    </Router>
  );
}