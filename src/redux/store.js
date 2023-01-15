import { configureStore } from '@reduxjs/toolkit';
import { phoneReducer } from './phoneSlice';
import { filterReducer } from './filterSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'phone',
  storage: storage,
};
const contactsPersistReducer = persistReducer(
  contactsPersistConfig,
  phoneReducer
);
export const store = configureStore({
  reducer: {
    contacts: contactsPersistReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
