import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface ITokenUser {
  data: Array<string>;
}
export const initialStateUserToken: ITokenUser = {
  data: [],
};
export const userAuthToken = createSlice({
  name: 'tokenState',
  initialState: initialStateUserToken,
  reducers: {
    addToken(state, action: PayloadAction<string>) {
      state.data.pop();
      state.data.push(action.payload);
    },
  },
});

export default userAuthToken.reducer;
export const {addToken} = userAuthToken.actions;