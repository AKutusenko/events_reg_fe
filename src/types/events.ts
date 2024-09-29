import { Event } from './event';

export type Events = {
  data: Event[];
  total: number;
  page: number;
  lastPage: number;
};
