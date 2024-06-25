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
  deliveryAdditionalInformation: string;
  deliveryCoordinates: {
    lat: string;
    lng: string;
  };
  deliveryContact: string;
}

export const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    products: [] as Cart[],
    userId: '',
    recipientNames: '',
    deliveryAdditionalInformation: '',
    deliveryCoordinates: '',
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
    updateDeliveryDetails(state, action) {
      state.deliveryAdditionalInformation =
        action.payload.deliveryAdditionalInformation;
      state.deliveryCoordinates = action.payload.deliveryCoordinates;
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart, removeFromCart, updateDeliveryDetails } =
  orderSlice.actions;

export const selectCartItems = (state: RootState) => state.orders.products;

export const selectOrder = (state: RootState) => state.orders;

export default orderSlice.reducer;
