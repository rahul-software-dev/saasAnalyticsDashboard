import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import ChartComponent from '../components/dashboardUI/ChartComponent';

const DashboardPage = () => {
  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Overview of SaaS usage metrics" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="User Engagement">
          <ChartComponent type="line" metric="engagement" />
        </Card>
        <Card title="Feature Adoption">
          <ChartComponent type="bar" metric="features" />
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;