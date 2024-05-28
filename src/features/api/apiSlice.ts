import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ReminderState } from '../Reminders/reminderSlice';

// Define a service using a base URL and expected endpoints
export const giftApi = createApi({
  reducerPath: 'giftApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.100.2:3000' }),
  tagTypes: ['Reminders'],
  endpoints: (builder) => ({
    getReminders: builder.query<ReminderState[], void>({
      query: () => '/reminders',
      providesTags: ['Reminders'],
    }),
    addReminder: builder.mutation({
      query: (reminder) => ({
        url: '/reminders',
        method: 'POST',
        body: {
          ...reminder,
        },
      }),
      invalidatesTags: ['Reminders'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRemindersQuery, useAddReminderMutation } = giftApi;
