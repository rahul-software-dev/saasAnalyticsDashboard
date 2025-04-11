import React from 'react';
import TenantTable from '../components/roleAccess/TenantTable';
import PageHeader from '../components/common/PageHeader';

const TenantManagementPage = () => {
  return (
    <div>
      <PageHeader title="Tenant Management" subtitle="Manage all tenant organizations" />
      <TenantTable />
    </div>
  );
};

export default TenantManagementPage;