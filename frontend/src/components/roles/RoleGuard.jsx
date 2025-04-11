import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const RoleGuard = ({ allowedRoles, children }) => {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    return <p>Access Denied</p>;
  }

  return <>{children}</>;
};

export default RoleGuard;