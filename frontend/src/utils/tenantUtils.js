export const getCurrentTenant = () => localStorage.getItem('tenant');

export const setCurrentTenant = (tenantId) =>
  localStorage.setItem('tenant', tenantId);

export const removeCurrentTenant = () => localStorage.removeItem('tenant');

export const isTenantValid = (tenantList, currentTenant) =>
  tenantList?.some((t) => t.id === currentTenant);