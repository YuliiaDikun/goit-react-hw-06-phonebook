import { configureStore } from '@reduxjs/toolkit';
import { phoneReducer } from './phoneSlice';

export const store = configureStore({ reducer: { contacts: phoneReducer } });
