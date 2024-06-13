import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { RootState } from '../../app/store';
import giftAPI from './giftAPI';

export interface VendorState {
  id: string;
  name: string;
  image: string;
}

export interface ProductState {
  id: string;
  vendorId: string;
  name: string;
  category: string;
  price: string;
  image: string | null;
  description: string;
}

export interface VendorId {
  id: string;
}

export interface VendorsAndProducts {
  vendors: VendorState[];
  products: ProductState[];
  loading: boolean;
}

const initialState: VendorsAndProducts = {
  vendors: [],
  products: [],
  loading: false,
};

export const initVendors = createAsyncThunk(
  'vendors/fetchAllVendors',
  async (action: void, { dispatch, getState, extra, requestId, signal }) => {
    const response = await giftAPI.fetchVendors();
    return response.json();
  },
);

export const giftSlice = createSlice({
  name: 'VendorsAndProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initVendors.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(initVendors.fulfilled, (state, { payload }) => {
        state.vendors.push(payload);
        state.loading = false;
      });
  },
});

export const selectVendors = (state: RootState) =>
  state.VendorsAndProducts.vendors;
export const selectProducts = (state: RootState) =>
  state.VendorsAndProducts.products;

export default giftSlice.reducer;
