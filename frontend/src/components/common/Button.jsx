import React from 'react';

const Button = ({ type = 'button', onClick, children, variant = 'primary', disabled }) => {
  const className = `btn ${variant} ${disabled ? 'disabled' : ''}`;
  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;