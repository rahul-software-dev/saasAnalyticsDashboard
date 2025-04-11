import React from 'react';
import OverviewCards from './OverviewCards';
import EngagementChart from './EngagementChart';
import FeatureUsageChart from './FeatureUsageChart';
import UserActivityTable from './UserActivityTable';
import KPIWidgets from './KPIWidgets';

const MainDashboard = () => {
  return (
    <div className="dashboard-container">
      <OverviewCards />
      <KPIWidgets />
      <EngagementChart />
      <FeatureUsageChart />
      <UserActivityTable />
    </div>
  );
};

export default MainDashboard;