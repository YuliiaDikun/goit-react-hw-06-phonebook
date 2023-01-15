import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, { payload }) {
      return payload;
    },
  },
});
export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
