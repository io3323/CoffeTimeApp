import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  ModelTypes,
  modelTypesObject,
} from '../../components/registScreen/inputFormRegist/modelTypesObject';

type writeIconModel = {
  name?: boolean;
  email?: boolean;
  password?: boolean;
};
type ActionLoadModel = {
  typeAction: string;
  stateAction: boolean;
};
const initialState: writeIconModel = {
  name: false,
  email: false,
  password: false,
};
export const writeIconControllerSlice = createSlice({
  name: 'writeIconControllerState',
  initialState: initialState,
  reducers: {
    changeStateWriteIcon(state, action: PayloadAction<ActionLoadModel>) {
      if (action.payload.typeAction == modelTypesObject.Name_User) {
        let curentState = action.payload.stateAction;
        state = {...state, name: curentState};
        return state;
      }
      if (action.payload.typeAction == modelTypesObject.Email_User) {
        let curentState = action.payload.stateAction;
        state = {...state, email: curentState};
        return state;
      }
      if (action.payload.typeAction == modelTypesObject.Password_User) {
        let curentState = action.payload.stateAction;
        state = {...state, password: curentState};
        return state;
      }
    },
  },
});

export default writeIconControllerSlice.reducer;
export const {changeStateWriteIcon} = writeIconControllerSlice.actions;
