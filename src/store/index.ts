import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { EventsApi } from './api';

const reducers = combineReducers({
  [EventsApi.reducerPath]: EventsApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(EventsApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
