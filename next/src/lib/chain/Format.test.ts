import { formatDate, formatInstant, truncate } from './Format';

describe('formatDate', () => {
  it('names the campus date without a time zone shift', () => {
    expect(formatDate('2026-10-17')).toBe('Sat, Oct 17');
    expect(formatDate('2026-01-01')).toBe('Thu, Jan 1');
  });
});

describe('formatInstant', () => {
  it('renders the instant in campus time', () => {
    // 2026-10-17 00:30 UTC is 20:30 EDT on 2026-10-16
    expect(formatInstant('2026-10-17T00:30:00Z')).toBe('Oct 16, 8:30 PM');
  });
});

describe('truncate', () => {
  it('keeps short text and cuts long text with an ellipsis', () => {
    expect(truncate('short', 10)).toBe('short');
    expect(truncate('a longer sentence', 10)).toBe('a longer…');
    expect(truncate('a longer sentence', 10).length).toBeLessThanOrEqual(10);
  });
});
