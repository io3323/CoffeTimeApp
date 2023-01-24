import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface IUserMainSlice {
  userInfo?: IUserInfoSlice;
  buttonController?: boolean;
}
interface IUserInfoSlice {
  userImage?: string | undefined;
  userName?: string;
  userEmail?: string;
  userPassword?: string;
}
export const initialStateUserInfo: IUserMainSlice = {
  userInfo: {
    userImage: '',
    userName: '',
    userEmail: '',
    userPassword: '',
  },
  buttonController: false,
};
export const userInfoSlice = createSlice({
  name: 'userInfoState',
  initialState: initialStateUserInfo,
  reducers: {
    addUserImageProfile(state, action: PayloadAction<IUserInfoSlice>) {
      const currentState = {
        ...state.userInfo,
        userImage: action.payload.userImage,
      };
      state.userInfo = currentState;
      return state;
    },
    addUserNameProfile(state, action: PayloadAction<IUserInfoSlice>) {
      const currentState = {
        ...state.userInfo,
        userName: action.payload.userName,
      };
      state.userInfo = currentState;
      return state;
    },
    addUserEmailProfile(state, action: PayloadAction<IUserInfoSlice>) {
      const currentState = {
        ...state.userInfo,
        userEmail: action.payload.userEmail,
      };
      state.userInfo = currentState;
      return state;
    },
    addUserPasswordProfile(state, action: PayloadAction<IUserInfoSlice>) {
      const currentState = {
        ...state.userInfo,
        userPassword: action.payload.userPassword,
      };
      state.userInfo = currentState;
      return state;
    },
    changeButtonControllerState(state) {
      if (
        state.userInfo!.userName !== '' &&
        state.userInfo!.userEmail !== '' &&
        state.userInfo!.userPassword !== ''
      ) {
        state.buttonController = true;
      } else {
        state.buttonController = false;
      }
      return state;
    },
  },
});

export default userInfoSlice.reducer;
export const {
  addUserImageProfile,
  addUserPasswordProfile,
  addUserNameProfile,
  addUserEmailProfile,
  changeButtonControllerState,
} = userInfoSlice.actions;
