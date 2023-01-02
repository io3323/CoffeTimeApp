import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICafeInfo} from '../reduToolKitQuery/interfacesCoffeData';
export const initialStateCafeInfo: ICafeInfo = {
  id: '',
  name: '',
  address: '',
  coordinates: '',
  description: '',
  images: '',
};
export const cafeInfoSlice = createSlice({
  name: 'cafeInfoState',
  initialState: initialStateCafeInfo,
  reducers: {
    addCafeInfo(state, action: PayloadAction<ICafeInfo>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.coordinates = action.payload.coordinates;
      state.images = action.payload.images;
      state.address = action.payload.address;
      state.description = action.payload.description;
    },
  },
});

export default cafeInfoSlice.reducer;
export const {addCafeInfo} = cafeInfoSlice.actions;
