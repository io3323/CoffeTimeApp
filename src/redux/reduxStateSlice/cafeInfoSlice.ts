import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICafeInfo} from '../reduToolKitQuery';
const initialStateCafeInfo: Array<ICafeInfo> = [
  {
    id: '',
    name: '',
    address: '',
    coordinates: '',
    description: '',
    images: '',
  },
];
export const cafeInfoSlice = createSlice({
  name: 'cafeInfoState',
  initialState: initialStateCafeInfo,
  reducers: {
    addCafeInfo(state, action: PayloadAction<ICafeInfo>) {
      state.pop();
      state.push(action.payload);
    },
  },
});

export default cafeInfoSlice.reducer;
export const {addCafeInfo} = cafeInfoSlice.actions;
