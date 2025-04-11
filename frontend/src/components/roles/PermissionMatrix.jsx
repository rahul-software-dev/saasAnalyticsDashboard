import React from 'react';

const PermissionMatrix = ({ roles = [] }) => {
  const allPermissions = ['read', 'write', 'update', 'delete', 'admin'];

  return (
    <div className="permission-matrix">
      <h3>Permission Matrix</h3>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            {allPermissions.map((perm) => (
              <th key={perm}>{perm}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              {allPermissions.map((perm) => (
                <td key={perm}>
                  {role.permissions.includes(perm) ? '✔' : '✘'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionMatrix;