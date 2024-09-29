import { SortBy, SortOrders } from '@/enums';

export type EventsQueryParams = {
  page: number;
  limit: number;
  sortBy: SortBy;
  order: SortOrders;
};
