import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
    changeLanguage(state, action: PayloadAction<ModelLocalisation>) {
      state.local = action.payload.local;
    },
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
export const {changeLanguage, changeLanguageController} =
  localisationSlice.actions;
