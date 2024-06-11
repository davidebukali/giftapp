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

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  // if you do not want to persist this part of the state
  // blacklist: ['omitedPart']
};

const rootReducer = combineReducers({
  reminder: reminderReducer,
  // not persisting this reducer
  // omitedPart:OmitReducer
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
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
