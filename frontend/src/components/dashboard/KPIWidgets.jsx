import React from 'react';

const KPIWidgets = () => {
  const kpis = [
    { label: 'Avg. Session Time', value: '12m 45s' },
    { label: 'Conversion Rate', value: '7.3%' },
    { label: 'Support Tickets', value: '14' }
  ];

  return (
    <div className="kpi-widgets">
      {kpis.map((kpi, i) => (
        <div className="kpi-widget" key={i}>
          <p className="kpi-label">{kpi.label}</p>
          <h4 className="kpi-value">{kpi.value}</h4>
        </div>
      ))}
    </div>
  );
};

export default KPIWidgets;