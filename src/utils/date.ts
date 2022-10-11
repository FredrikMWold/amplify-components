// formatDate(new Date()) => 16.06.2021
// formatDate(new Date(), {format: 'DD.MM.YYYY'}) => 16.06.2021
// formatDate(new Date(), {format: 'YYYY-MM-DD'}) => 2021-06-16
// formatDate(new Date(), {format: 'DD. month YYYY'}) => 16. June 2021
const formatDate = (
  date: Date | string | null | undefined,
  options?: {
    format: 'DD.MM.YYYY' | 'DD. month YYYY' | 'YYYY-MM-DD' | 'DD.MM.YY';
  }
): string => {
  if (date) {
    const dateObj = new Date(date);
    if (dateObj.getTime()) {
      if (options?.format === 'DD. month YYYY') {
        const day = dateObj.toLocaleDateString('en-GB', { day: 'numeric' });
        return `${day}. ${dateObj.toLocaleString('en-GB', {
          month: 'long',
          year: 'numeric',
        })}`;
      }
      const day = dateObj.getDate();
      const month = dateObj.getMonth() + 1;
      const year = dateObj.getFullYear();
      if (options?.format === 'YYYY-MM-DD') {
        return `${year}-${month}-${day}`;
      }
      if (options?.format === 'DD.MM.YY') {
        return `${day < 10 ? '0' + day : day}.${
          month < 10 ? '0' + month : month
        }.${year.toString().slice(-2)}`;
      }
      return `${day < 10 ? '0' + day : day}.${
        month < 10 ? '0' + month : month
      }.${year}`;
    }
  }
  return '';
};

// formatDateTime(new Date()) => 19. January 2022, 01:32
// formatDateTime(new Date(), {month: 'short'}) => 19. Jan 2022, 01:32
const formatDateTime = (
  date: Date | string | null | undefined,
  options: { month?: 'short' | 'long'; isGMT?: boolean } = {
    month: 'long',
    isGMT: false,
  }
): string => {
  if (date) {
    const dateObj = new Date(date);
    if (dateObj.getTime()) {
      if (options.isGMT ?? false) {
        dateObj.setTime(
          dateObj.getTime() + dateObj.getTimezoneOffset() * 60000
        );
      }
      const day = dateObj.toLocaleDateString('en-GB', { day: 'numeric' });
      return `${day}. ${dateObj.toLocaleString('en-GB', {
        month: options.month ?? 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })}`;
    }
  }
  return '';
};

// formatRelativeDateTime(new Date()) => Today at 7:17
// formatRelativeDateTime(new Date(2018, 11, 24, 10, 33)) => 24. November 2018, 10:33
const formatRelativeDateTime = (
  date: Date | string | null | undefined,
  isGMT = false
): string => {
  if (date) {
    const dateObj = new Date(date);
    const currentDate = new Date();
    if (dateObj.getTime()) {
      if (isGMT) {
        dateObj.setTime(
          dateObj.getTime() + dateObj.getTimezoneOffset() * 60000
        );
      }
      const differenceInMS = currentDate.getTime() - dateObj.getTime();
      const differenceInDays = differenceInMS / (1000 * 3600 * 24);
      const time = dateObj.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      });
      if (differenceInDays < 1 && currentDate.getDay() === dateObj.getDay()) {
        return `Today at ${time}`;
      } else if (differenceInDays < 2) {
        // Yesterday
        return `Yesterday at ${time}`;
      } else if (differenceInDays > 2 && differenceInDays < 7) {
        // Show day
        return `${dateObj.toLocaleString('en-GB', {
          weekday: 'long',
        })} at ${time}`;
      } else {
        // More than a week since, show normal formatDateTime
        return formatDateTime(date);
      }
    }
  }
  return '';
};

const isBetweenDates = (
  date: Date | string | null | undefined,
  dates: [Date, Date]
): boolean => {
  if (date) {
    const dateObj = new Date(date);
    if (dateObj.getTime()) {
      return date >= dates[0] && date <= dates[1];
    }
  }
  return false;
};

export default {
  formatDate,
  formatDateTime,
  formatRelativeDateTime,
  isBetweenDates,
};
