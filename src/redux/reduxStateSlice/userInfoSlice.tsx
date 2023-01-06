import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface IUserInfoSlice {
  userImage: string | undefined;
  userName: string;
  userEmail: string;
  userPassword: string;
}
export const initialStateUserInfo: IUserInfoSlice = {
  userImage: '',
  userName: '',
  userEmail: '',
  userPassword: '',
};
export const userInfoSlice = createSlice({
  name: 'userInfoState',
  initialState: initialStateUserInfo,
  reducers: {
    createUserProfile(state, action: PayloadAction<IUserInfoSlice>) {
      const actionType = action.payload;
      state.userImage = actionType.userImage;
      state.userName = actionType.userName;
      state.userEmail = actionType.userEmail;
      state.userPassword = actionType.userPassword;
    },
  },
});

export default userInfoSlice.reducer;
export const {createUserProfile} = userInfoSlice.actions;
