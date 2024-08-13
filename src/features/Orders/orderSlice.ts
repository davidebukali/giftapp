import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { API_URL } from '../../utils/constants';

export interface Cart {
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
        state.products[index].quantity = action.payload.quantity;
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
    addRecipientNames(state, action) {
      console.log('Saving recipient names', action.payload);
      state.recipientNames = action.payload.names;
    },
    addRecipientContact(state, action) {
      console.log('Saving contact information', action.payload);

      state.deliveryContact = action.payload.contact;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  addRecipientContact,
  addRecipientNames,
  addToCart,
  removeFromCart,
  updateDeliveryDetails,
} = orderSlice.actions;

export const selectCartItems = (state: RootState) => state.orders.products;

export const countCartItems = (state: RootState) =>
  state.orders.products.length;

export const selectOrder = (state: RootState) => state.orders;

export default orderSlice.reducer;
