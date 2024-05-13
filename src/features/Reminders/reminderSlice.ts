import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

export interface ReminderState {
  id: string;
  names: string;
  date: string;
  phone?: string | null;
  image: string;
  eventtype: string;
}

const initialState: ReminderState[] = [
  {
    id: '1',
    names: 'Tracy Kirabo',
    date: '2024-05-17T00:30:00.000Z',
    phone: null,
    image: '',
    eventtype: 'Birthday',
  },
];

export const reminderSlice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ReminderState>) => {
      state.push({
        id: uuid.v4() as string,
        names: action.payload.names,
        date: action.payload.date,
        phone: action.payload.phone,
        image: action.payload.image,
        eventtype: action.payload.eventtype,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = reminderSlice.actions;

export default reminderSlice.reducer;
