import React from 'react';
import RoleList from './RoleList';
import RoleForm from './RoleForm';
import PermissionMatrix from './PermissionMatrix';

const RoleManagement = () => {
  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <RoleForm />
      <PermissionMatrix />
      <RoleList />
    </div>
  );
};

export default RoleManagement;