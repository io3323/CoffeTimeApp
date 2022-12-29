import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICoffeData} from '../reduToolKitQuery';
export type CoffeModel = {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
};
export const initialStateCoffeData: Array<CoffeModel> = [
  {
    id: '',
    name: '',
    address: '',
    coordinates: '',
    description: '',
    images: '',
  },
];
export const coffeDataSlice = createSlice({
  name: 'coffeDataState',
  initialState: initialStateCoffeData,
  reducers: {
    addDataCoffe(state, action: PayloadAction<ICoffeData>) {
      state.pop();
      state.push(action.payload);
    },
  },
});

export default coffeDataSlice.reducer;
export const {addDataCoffe} = coffeDataSlice.actions;
