import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = '';

export const currentElementSlice = createSlice({
  name: 'currentElementState',
  initialState: initialState,
  reducers: {
    setCurrentElement(state, {payload}: PayloadAction<string>) {
      state = payload;
      return state;
    },
  },
});

export default currentElementSlice.reducer;
export const {setCurrentElement} = currentElementSlice.actions;
