import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ru} from '../../localisationLanguageName';

type ModelLocalisation = {
  local: string;
};
export const localLangInitialState: ModelLocalisation = {
  local: ru,
};
export const localisationSlice = createSlice({
  name: 'localisationState',
  initialState: localLangInitialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<ModelLocalisation>) {
      state.local = action.payload.local;
    },
  },
});

export default localisationSlice.reducer;
export const {changeLanguage} = localisationSlice.actions;
