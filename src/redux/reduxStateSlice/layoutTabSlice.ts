import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ModelLayoutTab = {
  translateX: number;
};
const initialTabState: Array<ModelLayoutTab> = [{translateX: 0}];
export const layoutTabSlice = createSlice({
  name: 'layoutTabState',
  initialState: initialTabState,
  reducers: {
    addLayoutTab(state, action: PayloadAction<ModelLayoutTab>) {
      const lengthState = state.length;
      state.map((stateLayout, index) => {
        if (stateLayout.translateX == 0 && index == 0) {
          state.splice(index, 1);
        }
        if (lengthState < 2) {
          if (lengthState == 1) {
            const layout = action.payload.translateX;
            if (stateLayout.translateX < layout) {
              const objectLayout: ModelLayoutTab = {
                translateX: layout,
              };
              state.push(objectLayout);
            } else if (stateLayout.translateX > layout) {
              const objectLayout: ModelLayoutTab = {
                translateX: layout,
              };
              state.splice(index, 0, objectLayout);
            }
          }
        }
      });
    },
  },
});

export default layoutTabSlice.reducer;
export const {addLayoutTab} = layoutTabSlice.actions;
