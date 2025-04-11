import React from 'react';

const OverviewCards = () => {
  const stats = [
    { title: 'Total Users', value: 5321 },
    { title: 'Active Sessions', value: 301 },
    { title: 'Daily Signups', value: 87 },
    { title: 'Churn Rate', value: '2.1%' }
  ];

  return (
    <div className="overview-cards">
      {stats.map((card, idx) => (
        <div className="card" key={idx}>
          <h3>{card.title}</h3>
          <p>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;