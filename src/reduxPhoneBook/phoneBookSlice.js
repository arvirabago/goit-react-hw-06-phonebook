import { createSlice } from '@reduxjs/toolkit';



const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    // initial state
  },
  reducers: {
    // reducer functions
  },
});

export const { addContact, deleteContact, setFilter } = phoneBookSlice.actions;
export default phoneBookSlice.reducer;


