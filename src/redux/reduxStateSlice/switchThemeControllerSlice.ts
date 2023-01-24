import {createSlice} from '@reduxjs/toolkit';

export const switchThemeControllerSlice = createSlice({
  name: 'switchThemeControllerState',
  initialState: false,
  reducers: {
    toggleSwitch(state) {
      let currentState = state;
      if (currentState) {
        currentState = false;
      } else {
        currentState = true;
      }
      state = currentState;
      return state;
    },
  },
});

export default switchThemeControllerSlice.reducer;
export const {toggleSwitch} = switchThemeControllerSlice.actions;
