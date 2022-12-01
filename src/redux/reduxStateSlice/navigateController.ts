import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialNavigateState = false;
export const navigateController = createSlice({
  name: 'navigateState',
  initialState: initialNavigateState,
  reducers: {
    setNavigateController(state, action: PayloadAction<boolean>) {
      state = action.payload;
    },
  },
});

export default navigateController.reducer;
export const {setNavigateController} = navigateController.actions;
