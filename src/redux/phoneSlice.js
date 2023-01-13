import { createSlice, current } from '@reduxjs/toolkit';

// const tasksInitialState = [];
const phoneSlice = createSlice({
  name: 'phone',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      return [...state, payload];
    },
    deleteContact(state, action) {},
  },
});
console.log('Phone slice', phoneSlice);
export const { addContact, deleteContact } = phoneSlice.actions;

export const phoneReducer = phoneSlice.reducer;
