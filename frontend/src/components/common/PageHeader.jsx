import React from 'react';

const PageHeader = ({ title, subtitle }) => (
  <div className="page-header">
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

export default PageHeader;