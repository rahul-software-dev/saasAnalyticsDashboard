// server/utils/response.js

exports.success = (res, data, message = 'OK', status = 200) => {
    return res.status(status).json({ success: true, message, data });
  };
  
  exports.error = (res, error, status = 500) => {
    if (typeof error === 'string') {
      return res.status(status).json({ success: false, message: error });
    }
    if (error.isJoi) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        details: error.details.map(d => d.message)
      });
    }
    return res.status(status).json({
      success: false,
      message: error.message || 'Internal server error'
    });
  };
  