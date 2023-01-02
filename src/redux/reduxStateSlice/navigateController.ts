import {createSlice, PayloadAction} from '@reduxjs/toolkit';
type NavigateModel = {
  state: boolean;
};
const initialNavigateState: NavigateModel = {
  state: false,
};
export const navigateController = createSlice({
  name: 'navigateState',
  initialState: initialNavigateState,
  reducers: {
    setNavigateController(state, action: PayloadAction<boolean>) {
      state.state = action.payload;
    },
  },
});

export default navigateController.reducer;
export const {setNavigateController} = navigateController.actions;
