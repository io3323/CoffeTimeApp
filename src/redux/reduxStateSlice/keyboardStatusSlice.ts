import {createSlice, PayloadAction} from '@reduxjs/toolkit';
type KeyboardModel = {
  keyboardStatus: boolean;
};
const keyboardState: KeyboardModel = {
  keyboardStatus: false,
};
export const keyboardStatusSlice = createSlice({
  name: 'keyboardStatusState',
  initialState: keyboardState,
  reducers: {
    changeKeyboardState(state, action: PayloadAction<KeyboardModel>) {
      state.keyboardStatus = action.payload.keyboardStatus;
    },
  },
});

export default keyboardStatusSlice.reducer;
export const {changeKeyboardState} = keyboardStatusSlice.actions;
