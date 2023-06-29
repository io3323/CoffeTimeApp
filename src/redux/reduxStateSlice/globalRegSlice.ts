import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: boolean = false;

export const globalRegSlice = createSlice({
  name: 'globalRegState',
  initialState: initialState,
  reducers: {
    changeGlobalRegState(state, {payload}: PayloadAction<boolean>) {
      state = payload;
      return state;
    },
  },
});

export default globalRegSlice.reducer;
export const {changeGlobalRegState} = globalRegSlice.actions;
