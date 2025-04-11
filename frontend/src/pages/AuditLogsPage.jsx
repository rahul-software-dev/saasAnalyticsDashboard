import React from 'react';
import AuditLogTable from '../components/roleAccess/AuditLogTable';
import PageHeader from '../components/common/PageHeader';

const AuditLogsPage = () => {
  return (
    <div>
      <PageHeader title="Audit Logs" subtitle="Track user actions and changes" />
      <AuditLogTable />
    </div>
  );
};

export default AuditLogsPage;