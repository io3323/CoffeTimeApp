import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {light} from '../../themeNameApp';

type ModelTheme = {
  theme: string;
};
export const initialThemeState: ModelTheme = {
  theme: light,
};
export const themeSlice = createSlice({
  name: 'themeState',
  initialState: initialThemeState,
  reducers: {
    changeTheme(state, action: PayloadAction<ModelTheme>) {
      state.theme = action.payload.theme;
    },
  },
});

export default themeSlice.reducer;
export const {changeTheme} = themeSlice.actions;
