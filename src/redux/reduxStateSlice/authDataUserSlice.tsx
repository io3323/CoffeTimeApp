import {createSlice, PayloadAction} from '@reduxjs/toolkit';
type ModelInitialLoginUser = {
  login?: string;
  password?: string;
};
const initialLoginUser: ModelInitialLoginUser = {
  login: '',
  password: '',
};
export const authDataUserSlice = createSlice({
  name: 'authDataUserState',
  initialState: initialLoginUser,
  reducers: {
    addLoginUser(state, action: PayloadAction<ModelInitialLoginUser>) {
      const object = {...state, login: action.payload.login};
      state = object;
      return state;
    },
    addPasswordUser(state, action: PayloadAction<ModelInitialLoginUser>) {
      const object = {...state, password: action.payload.password};
      state = object;
      return state;
    },
  },
});

export default authDataUserSlice.reducer;
export const {addLoginUser, addPasswordUser} = authDataUserSlice.actions;
