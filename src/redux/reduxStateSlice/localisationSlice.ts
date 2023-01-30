import {createSlice} from '@reduxjs/toolkit';
import {ru} from '../../localisationLanguageName';

type ModelLocalisation = {
  local?: string;
  localController?: boolean;
};
export const localLangInitialState: ModelLocalisation = {
  local: ru,
  localController: false,
};
export const localisationSlice = createSlice({
  name: 'localisationState',
  initialState: localLangInitialState,
  reducers: {
    changeLanguageController(state) {
      let currentState = state.localController;
      if (currentState) {
        currentState = false;
      } else {
        currentState = true;
      }
      state = {...state, localController: currentState};
      return state;
    },
  },
});

export default localisationSlice.reducer;
export const {changeLanguageController} = localisationSlice.actions;
