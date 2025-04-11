import React, { useState } from 'react';

const RoleForm = ({ onSave }) => {
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ roleName, permissions });
    setRoleName('');
    setPermissions([]);
  };

  const handlePermissionToggle = (perm) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  const allPermissions = ['read', 'write', 'update', 'delete', 'admin'];

  return (
    <form onSubmit={handleSubmit} className="role-form">
      <input
        type="text"
        placeholder="Role Name"
        value={roleName}
        onChange={(e) => setRoleName(e.target.value)}
        required
      />
      <div className="permissions">
        {allPermissions.map((perm) => (
          <label key={perm}>
            <input
              type="checkbox"
              checked={permissions.includes(perm)}
              onChange={() => handlePermissionToggle(perm)}
            />
            {perm}
          </label>
        ))}
      </div>
      <button type="submit">Save Role</button>
    </form>
  );
};

export default RoleForm;