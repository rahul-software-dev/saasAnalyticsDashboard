import React from 'react';

const SelectField = ({ label, name, value, onChange, options = [] }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <select name={name} value={value} onChange={onChange} className="form-control">
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;