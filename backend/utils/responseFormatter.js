const success = (res, data, message = 'Success') => {
    return res.status(200).json({ success: true, message, data });
  };
  
  const error = (res, status = 500, message = 'Internal Server Error') => {
    return res.status(status).json({ success: false, message });
  };
  
  module.exports = {
    success,
    error,
  };