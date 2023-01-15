import { createSlice } from '@reduxjs/toolkit';

// const tasksInitialState = [];
const phoneSlice = createSlice({
  name: 'phone',
  initialState: { items: [] },
  reducers: {
    addContact(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(todo => todo.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = phoneSlice.actions;

export const phoneReducer = phoneSlice.reducer;
