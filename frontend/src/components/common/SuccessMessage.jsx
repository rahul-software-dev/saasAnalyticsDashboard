import React from 'react';

const SuccessMessage = ({ message }) => (
  message ? <div className="success-message">{message}</div> : null
);

export default SuccessMessage;