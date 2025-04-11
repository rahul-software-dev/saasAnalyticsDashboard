import React from 'react';
import FeedbackTable from '../components/settings/FeedbackTable';
import PageHeader from '../components/common/PageHeader';

const FeedbackPage = () => {
  return (
    <div>
      <PageHeader title="User Feedback" subtitle="Review feedback from users" />
      <FeedbackTable />
    </div>
  );
};

export default FeedbackPage;