const Roles = Object.freeze({
    ADMIN: 'admin',
    USER: 'user',
    MANAGER: 'manager',
  });
  
  const Permissions = Object.freeze({
    VIEW_DASHBOARD: 'view_dashboard',
    MANAGE_USERS: 'manage_users',
    MANAGE_TENANTS: 'manage_tenants',
  });
  
  module.exports = {
    Roles,
    Permissions,
  };