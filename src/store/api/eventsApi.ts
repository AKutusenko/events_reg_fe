import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiRoute } from '@/enums';
import { Events, Event } from '@/types';

export const EventsApi = createApi({
  reducerPath: 'EventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    getEvents: builder.query<Events, string>({
      query: (queryParams) => ({
        url: `${ApiRoute.EVENTS}?${queryParams}`,
        method: 'GET',
      }),
    }),
    getEventById: builder.query<Event, string>({
      query: (id) => ({
        url: `${ApiRoute.EVENTS}/${id}`,
        method: 'GET',
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: ApiRoute.PARTICIPANT,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useGetEventsQuery, useGetEventByIdQuery } = EventsApi;
