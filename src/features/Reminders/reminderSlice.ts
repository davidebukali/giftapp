import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { RootState } from '../../app/store';

export interface ReminderState {
  id: string;
  names: string;
  date: string;
  phone?: string | null;
  image: string;
  eventtype: string;
}

export interface ReminderId {
  id: string;
}

const initialState: ReminderState[] = [];

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
    update: (state, action: PayloadAction<ReminderState>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index] = {
        ...action.payload,
      };
    },
    remove: (state, action: PayloadAction<ReminderId>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index > -1) {
        // only splice array when item is found
        state.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, update } = reminderSlice.actions;

export const selectReminders = (state: RootState) => state.reminder;

export default reminderSlice.reducer;
