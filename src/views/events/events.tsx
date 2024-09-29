'use client';

import { Typography } from '@mui/material';

import { trimText } from '@/helpers/trim-text';
import { dateFormat } from '@/helpers/date-format';
import { LoaderCircle } from '@/components';

import { EventCard, PaginationBar, SortBar, useSearch } from './components';
import { EventList, Wrapper } from './styles';

const DESCRIPTION_LENGTH = 100;

export function Events(): JSX.Element {
  const {
    limit,
    events,
    isPagination,
    setPage,
    handleTitleSortClick,
    handleEventDateSortClick,
    handleOrganizerSortClick,
  } = useSearch();

  const renderEvents = () => {
    if (!events) return <LoaderCircle />;

    const { total } = events;

    return (
      <Wrapper>
        <Typography variant="h2">Events</Typography>

        <SortBar
          total={total}
          handleTitleSortClick={handleTitleSortClick}
          handleEventDateSortClick={handleEventDateSortClick}
          handleOrganizerSortClick={handleOrganizerSortClick}
        />

        <EventList>
          {events.data.map((event) => {
            const { id, title, description, eventDate, organizer } = event;

            return (
              <EventCard
                key={id}
                id={id}
                title={title}
                description={trimText(description, DESCRIPTION_LENGTH)}
                eventDate={dateFormat(eventDate)}
                organizer={organizer}
              />
            );
          })}
        </EventList>

        {isPagination && <PaginationBar total={total} limit={limit} setPage={setPage} />}
      </Wrapper>
    );
  };

  return renderEvents();
}
