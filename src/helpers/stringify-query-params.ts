// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function stringifyQueryParams(params: any): string {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.set(key, String(value));
    }
  });

  return queryParams.toString();
}
