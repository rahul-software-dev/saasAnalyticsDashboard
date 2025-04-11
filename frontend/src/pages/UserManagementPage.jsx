import React from 'react';
import UserTable from '../components/roleAccess/UserTable';
import PageHeader from '../components/common/PageHeader';

const UserManagementPage = () => {
  return (
    <div>
      <PageHeader title="User Management" subtitle="Manage all users" />
      <UserTable />
    </div>
  );
};

export default UserManagementPage;