import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { API_URL } from '../../utils/constants';

export interface GiftState {
  id: string;
  vendorId: string;
  name: string;
  category: string;
  price: string;
  image: string | null;
  description: string;
  extras: {
    name: String;
    price: String;
  }[];
}

export const initProducts = createAsyncThunk(
  'vendors/fetchAllProducts',
  async (id: string, {}) => {
    const response = await fetch(`${API_URL}/gifts?vendorId=${id}`);
    return response.json();
  },
);

export const giftAdapter = createEntityAdapter<GiftState>();

export const giftSlice = createSlice({
  name: 'gifts',
  initialState: giftAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initProducts.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        initProducts.fulfilled,
        (state, action: PayloadAction<GiftState[]>) => {
          giftAdapter.setAll(state, action.payload);
          state.loading = false;
        },
      );
  },
});

// export const { addFilteredProduct, resetFilteredProduct } = giftSlice.actions;

export const {
  selectById: selectGiftsById,
  selectIds: selectGiftIds,
  selectEntities: selectGiftEntities,
  selectAll: selectAllGifts,
  selectTotal: selectTotalGifts,
} = giftAdapter.getSelectors((state: RootState) => state.gifts);

export default giftSlice.reducer;
