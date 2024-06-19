import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { API_URL } from '../../utils/constants';

interface Cart {
  productId: string;
  name: string;
  cost: string;
  quantity: number;
}

export interface OrderState {
  products: Cart[];
  userId?: string;
  recipientNames: string;
  deliveryAddress: string;
  deliveryPin: string;
  deliveryContact: string;
}

export const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    products: [] as Cart[],
    userId: '',
    recipientNames: '',
    deliveryAddress: '',
    deliveryPin: '',
    deliveryContact: '',
  },
  reducers: {
    addToCart(state, action) {
      const index = state.products.findIndex(
        (item) => item.productId === action.payload.productId,
      );

      if (index >= 0) {
        state.products[index].quantity = state.products[index].quantity + 1;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const index = state.products.findIndex(
        (item) => item.productId === action.payload.productId,
      );

      if (index >= 0) {
        if (state.products[index].quantity > 1) {
          state.products[index].quantity = state.products[index].quantity - 1;
        } else {
          state.products.splice(index, 1);
        }
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart, removeFromCart } = orderSlice.actions;

export const selectCartItems = (state: RootState) => state.orders.products;

export default orderSlice.reducer;
