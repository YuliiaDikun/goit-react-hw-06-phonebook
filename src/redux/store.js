import { configureStore } from '@reduxjs/toolkit';
import { phoneReducer } from './phoneSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: { contacts: phoneReducer, filter: filterReducer },
});
