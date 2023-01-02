import {createSlice, PayloadAction} from '@reduxjs/toolkit';
type BackButtonModel = {
  nameScreen: string;
};
const backButtonControllerInitialState: BackButtonModel = {
  nameScreen: '',
};
export const backButtonControllerSlice = createSlice({
  name: 'backButtonControllerState',
  initialState: backButtonControllerInitialState,
  reducers: {
    changeState(state, action: PayloadAction<string>) {
      state.nameScreen = action.payload;
    },
  },
});

export default backButtonControllerSlice.reducer;
export const {changeState} = backButtonControllerSlice.actions;
