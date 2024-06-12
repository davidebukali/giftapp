import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { RootState } from '../../app/store';

export interface VendorState {
  id: string;
  name: string;
  image: string;
}

export interface VendorId {
  id: string;
}

const initialState: VendorState[] = [];

export const vendorSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<VendorState>) => {
      state.push({
        id: uuid.v4() as string,
        name: action.payload.name,
        image: action.payload.image,
      });
    },
    update: (state, action: PayloadAction<VendorState>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index] = {
        ...action.payload,
      };
    },
    remove: (state, action: PayloadAction<VendorId>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index > -1) {
        // only splice array when item is found
        state.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, update } = vendorSlice.actions;

export const selectVendors = (state: RootState) => state.vendors;

export default vendorSlice.reducer;
