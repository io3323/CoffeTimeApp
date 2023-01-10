import {createSlice, PayloadAction} from '@reduxjs/toolkit';
type IndicatorButtonModel = {
  active: boolean;
};
const initialStateButton: IndicatorButtonModel = {
  active: false,
};
export const indicatorButtonSlice = createSlice({
  name: 'indicatorButtonState',
  initialState: initialStateButton,
  reducers: {
    changeButtonIndicatorState(
      state,
      active: PayloadAction<IndicatorButtonModel>,
    ) {
      state.active = active.payload.active;
    },
  },
});

export default indicatorButtonSlice.reducer;
export const {changeButtonIndicatorState} = indicatorButtonSlice.actions;
