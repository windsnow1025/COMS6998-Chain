// Formatting for the admin tables, in the campus time zone the data lives in
export const CampusTimeZone = 'America/New_York';

const instantFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: CampusTimeZone,
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

const dateFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
  weekday: 'short',
  month: 'short',
  day: 'numeric',
});

// An instant as "Oct 17, 3:05 PM" on campus
export function formatInstant(instant: string | Date): string {
  return instantFormat.format(new Date(instant));
}

// A campus date (YYYY-MM-DD) as "Fri, Oct 17"
export function formatDate(date: string): string {
  return dateFormat.format(new Date(`${date}T00:00:00Z`));
}

export function truncate(text: string, limit: number): string {
  if (text.length <= limit) {
    return text;
  }
  return `${text.slice(0, limit - 1).trimEnd()}…`;
}
