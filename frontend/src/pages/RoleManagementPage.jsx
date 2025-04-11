import React from 'react';
import RoleTable from '../components/roleAccess/RoleTable';
import PageHeader from '../components/common/PageHeader';

const RoleManagementPage = () => {
  return (
    <div>
      <PageHeader title="Role Management" subtitle="Manage roles and permissions" />
      <RoleTable />
    </div>
  );
};

export default RoleManagementPage;