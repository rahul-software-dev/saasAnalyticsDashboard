const prefix = '[SaaS-Dashboard]';

export const log = (...args) => console.log(prefix, ...args);
export const warn = (...args) => console.warn(prefix, ...args);
export const error = (...args) => console.error(prefix, ...args);
export const debug = (...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.debug(prefix, ...args);
  }
};