import { format, parseISO } from 'date-fns';

export function formatDate(date: Date | string): string {
  const value = typeof date === 'string' ? parseISO(date) : date;
  return format(value, 'dd/MM/yyyy');
}

export function formatDateISO(date: Date | string): string {
  const value = typeof date === 'string' ? parseISO(date) : date;
  return format(value, 'yyyy-MM-dd');
}

export const formatDisplayDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};
