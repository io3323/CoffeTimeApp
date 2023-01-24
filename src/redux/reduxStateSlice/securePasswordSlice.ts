import {createSlice} from '@reduxjs/toolkit';
type SecureModel = {
  secureState: boolean;
};
const initilaState: SecureModel = {
  secureState: true,
};
export const securePasswordSlice = createSlice({
  name: 'securePasswordState',
  initialState: initilaState,
  reducers: {
    changeSecureState(state) {
      let currentState = state.secureState;
      if (currentState) {
        currentState = false;
      } else {
        currentState = true;
      }
      state.secureState = currentState;
      return state;
    },
  },
});

export default securePasswordSlice.reducer;

export const {changeSecureState} = securePasswordSlice.actions;
