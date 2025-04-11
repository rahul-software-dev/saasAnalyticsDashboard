export const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  export const isStrongPassword = (password) =>
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password);
  
  export const isEmpty = (value) => !value || value.trim() === '';
  
  export const validateSignup = ({ email, password, confirmPassword }) => {
    const errors = {};
    if (!isValidEmail(email)) errors.email = 'Invalid email';
    if (!isStrongPassword(password)) errors.password = 'Weak password';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
    return errors;
  };