import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { giftApi } from '../features/api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reminderReducer from '../features/Reminders/reminderSlice';
import giftReducer from '../features/Gift/giftSlice';
import orderReducer from '../features/Orders/orderSlice';
import { useDispatch } from 'react-redux';

const persistConfig = {
  key: 'root',
  version: 2,
  storage: AsyncStorage,
  // if you do not want to persist this part of the state
  blacklist: ['gifts'],
};

const rootReducer = combineReducers({
  reminder: reminderReducer,
  gifts: giftReducer,
  orders: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

setupListeners(store.dispatch);
