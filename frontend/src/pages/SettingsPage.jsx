import React from 'react';
import SettingsForm from '../components/settings/SettingsForm';
import PageHeader from '../components/common/PageHeader';

const SettingsPage = () => {
  return (
    <div>
      <PageHeader title="Settings" subtitle="Update your profile and preferences" />
      <SettingsForm />
    </div>
  );
};

export default SettingsPage;