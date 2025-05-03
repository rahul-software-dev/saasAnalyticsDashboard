// server/utils/date.js

exports.toISOString = (date = new Date()) => {
    return date.toISOString();
  };
  
  exports.addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  
  exports.isBetween = (date, start, end) => {
    const d = new Date(date);
    return d >= new Date(start) && d <= new Date(end);
  };
  
  exports.now = () => new Date();
  