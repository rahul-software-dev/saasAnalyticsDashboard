// Extract a user-friendly error message from an API error
export function getApiError(error) {
    if (!error) return 'Unknown error';
    if (error.response && error.response.data && error.response.data.message)
      return error.response.data.message;
    if (typeof error === 'string') return error;
    if (error.message) return error.message;
    return 'Unknown error';
  }
  