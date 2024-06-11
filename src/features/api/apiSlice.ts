import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ReminderState } from '../Reminders/reminderSlice';

// Define a service using a base URL and expected endpoints
export const giftApi = createApi({
  reducerPath: 'giftApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.100.2:3000' }),
  tagTypes: ['Reminders'],
  endpoints: (builder) => ({}),
});
