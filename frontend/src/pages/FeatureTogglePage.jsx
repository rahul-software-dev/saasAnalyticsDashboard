import React from 'react';
import FeatureTogglePanel from '../components/settings/FeatureTogglePanel';
import PageHeader from '../components/common/PageHeader';

const FeatureTogglePage = () => {
  return (
    <div>
      <PageHeader title="Feature Toggles" subtitle="Manage experimental features per tenant" />
      <FeatureTogglePanel />
    </div>
  );
};

export default FeatureTogglePage;