import React from 'react';
import UsageAnalytics from '../components/dashboardUI/UsageAnalytics';
import PageHeader from '../components/common/PageHeader';

const AnalyticsPage = () => {
  return (
    <div>
      <PageHeader title="Advanced Analytics" subtitle="Deep dive into usage data" />
      <UsageAnalytics />
    </div>
  );
};

export default AnalyticsPage;