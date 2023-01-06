import {createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
export interface ITokenUser {
  token: string;
}
type ActionTokenModel =
  | {data: string}
  | {error: FetchBaseQueryError | SerializedError};
export const initialStateUserToken: ITokenUser = {
  token: '',
};
export const userAuthToken = createSlice({
  name: 'tokenState',
  initialState: initialStateUserToken,
  reducers: {
    addToken(state, action: PayloadAction<ActionTokenModel>) {
      const tokenMas = Object.values(action.payload);
      tokenMas.map(tokenMap => {
        state.token = tokenMap;
      });
    },
  },
});

export default userAuthToken.reducer;
export const {addToken} = userAuthToken.actions;
