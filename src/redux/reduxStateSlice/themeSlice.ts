import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {dark, light} from '../../themeNameApp';

type ModelTheme = {
  theme?: string;
  themeController?: boolean;
  themeAnimate?: number;
};
export const initialThemeState: ModelTheme = {
  theme: light,
  themeController: false,
  themeAnimate: 0,
};
export const themeSlice = createSlice({
  name: 'themeState',
  initialState: initialThemeState,
  reducers: {
    changeTheme(state, action: PayloadAction<ModelTheme>) {
      state = {...state, theme: action.payload.theme};
      if (action.payload.theme === light) {
        state = {...state, themeAnimate: 0};
      } else if (action.payload.theme === dark) {
        state = {...state, themeAnimate: 1};
      }
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
