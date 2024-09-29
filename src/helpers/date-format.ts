export function dateFormat(date: string): string {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };

  const inputDate = new Date(date);

  return inputDate.toLocaleDateString('en-US', options);
}
