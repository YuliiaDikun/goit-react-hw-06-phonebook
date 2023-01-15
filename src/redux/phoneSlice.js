import { createSlice } from '@reduxjs/toolkit';

// const tasksInitialState = [];
const phoneSlice = createSlice({
  name: 'phone',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      return [...state, payload];
    },
    deleteContact(state, { payload }) {
      return state.filter(todo => todo.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = phoneSlice.actions;

export const phoneReducer = phoneSlice.reducer;
