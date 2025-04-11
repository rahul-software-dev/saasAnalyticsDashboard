import { formatDistanceToNow, parseISO, format } from 'date-fns';

export const formatRelative = (dateStr) => {
  const date = parseISO(dateStr);
  return formatDistanceToNow(date, { addSuffix: true });
};

export const formatDate = (dateStr, pattern = 'dd MMM yyyy') => {
  const date = parseISO(dateStr);
  return format(date, pattern);
};

export const getTimestamp = () => new Date().toISOString();