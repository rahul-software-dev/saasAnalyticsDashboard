import React from 'react';

const RoleList = ({ roles = [], onDelete }) => {
  return (
    <div className="role-list">
      <h3>Existing Roles</h3>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            <strong>{role.name}</strong> – {role.permissions.join(', ')}
            <button onClick={() => onDelete(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleList;