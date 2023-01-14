import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type ModelSettingsController = {
  controller: boolean;
};
const initialSettingsState: ModelSettingsController = {
  controller: false,
};
export const settingsControllerSlice = createSlice({
  name: 'settingsControllerState',
  initialState: initialSettingsState,
  reducers: {
    changeStatusController(state, action: PayloadAction<boolean>) {
      const curentState = action.payload;
      state.controller = curentState;
      return state;
    },
  },
});

export default settingsControllerSlice.reducer;
export const {changeStatusController} = settingsControllerSlice.actions;
