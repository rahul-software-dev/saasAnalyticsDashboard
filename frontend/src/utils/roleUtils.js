export const hasRole = (userRoles, requiredRole) => {
    return userRoles?.includes(requiredRole);
  };
  
  export const hasAnyRole = (userRoles, allowedRoles) => {
    return allowedRoles.some((role) => userRoles?.includes(role));
  };