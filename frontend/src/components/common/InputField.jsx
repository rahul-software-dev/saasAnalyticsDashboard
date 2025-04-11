import React from 'react';

const InputField = ({ label, name, value, onChange, type = 'text', placeholder }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="form-control"
    />
  </div>
);

export default InputField;