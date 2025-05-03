// Decode a JWT token (returns payload or null)
export function decodeJWT(token) {
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch {
      return null;
    }
  }
  