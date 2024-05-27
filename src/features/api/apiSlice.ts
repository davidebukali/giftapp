import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ReminderState } from '../Reminders/reminderSlice';

// Define a service using a base URL and expected endpoints
export const giftApi = createApi({
  reducerPath: 'giftApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.0.32:3000' }),
  endpoints: (builder) => ({
    getReminders: builder.query<ReminderState[], void>({
      query: () => '/reminders',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRemindersQuery } = giftApi;
