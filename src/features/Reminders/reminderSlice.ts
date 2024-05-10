import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

export interface ReminderState {
  id: string;
  names: string;
  date: string;
  phone?: number | null;
  image: string;
  eventtype: string;
}

const initialState: ReminderState[] = [
  {
    id: '1',
    names: 'Tracy Kirabo',
    date: '31st May',
    phone: null,
    image: '../../../assets/images/placeholder.png',
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
