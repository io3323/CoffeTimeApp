import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {light} from '../../themeNameApp';

type ModelTheme = {
  theme?: string;
  themeController?: boolean;
};
export const initialThemeState: ModelTheme = {
  theme: light,
  themeController: false,
};
export const themeSlice = createSlice({
  name: 'themeState',
  initialState: initialThemeState,
  reducers: {
    changeTheme(state, action: PayloadAction<ModelTheme>) {
      state = {...state, theme: action.payload.theme};
      return state;
    },
    changeControllerTheme(state) {
      let currentTheme = state.themeController;
      if (currentTheme) {
        currentTheme = false;
      } else {
        currentTheme = true;
      }
      state = {...state, themeController: currentTheme};
      return state;
    },
  },
});

export default themeSlice.reducer;
export const {changeTheme, changeControllerTheme} = themeSlice.actions;
