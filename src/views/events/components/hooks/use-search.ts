import { useState } from 'react';

import { SortBy, SortOrders } from '@/enums';
import { stringifyQueryParams } from '@/helpers/stringify-query-params';
import { useGetEventsQuery } from '@/store/api';
import { Events, EventsQueryParams } from '@/types';

type UseSearch = {
  limit: number;
  events: Events;
  isPagination: boolean;
  setPage: (page: number) => void;
  handleTitleSortClick: () => void;
  handleEventDateSortClick: () => void;
  handleOrganizerSortClick: () => void;
};

export function useSearch(): UseSearch {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(8);
  const [order, setOrder] = useState<SortOrders>(SortOrders.ASC);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.TITLE);

  const queryParams: EventsQueryParams = {
    page,
    limit,
    sortBy,
    order,
  };

  const { data } = useGetEventsQuery(stringifyQueryParams(queryParams));

  const emptyEvents: Events = {
    data: [],
    total: 0,
    page: 1,
    lastPage: 1,
  };

  const events = data ? data : emptyEvents;

  const isPagination = events.total > limit;

  const handleSortClick = (newSortBy: SortBy): void => {
    setOrder((prevSortOrder) => {
      if (sortBy === newSortBy) {
        return prevSortOrder === SortOrders.ASC ? SortOrders.DESC : SortOrders.ASC;
      }
      setSortBy(newSortBy);

      return SortOrders.ASC;
    });
  };

  const handleTitleSortClick = (): void => {
    handleSortClick(SortBy.TITLE);
  };

  const handleEventDateSortClick = (): void => {
    handleSortClick(SortBy.EVENT_DATE);
  };

  const handleOrganizerSortClick = (): void => {
    handleSortClick(SortBy.ORGANIZER);
  };

  return {
    limit,
    events,
    isPagination,
    setPage,
    handleTitleSortClick,
    handleEventDateSortClick,
    handleOrganizerSortClick,
  };
}
