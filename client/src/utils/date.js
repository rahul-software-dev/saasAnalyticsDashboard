// Format a JS Date or ISO string to YYYY-MM-DD
export function formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }
  
  // Format a JS Date or ISO string to a readable string
  export function formatDateTime(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleString();
  }
  
  // Get time ago (e.g., "2 hours ago")
  export function timeAgo(date) {
    if (!date) return '';
    const now = new Date();
    const past = new Date(date);
    const diff = Math.floor((now - past) / 1000);
    if (diff < 60) return `${diff} seconds ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  }
  