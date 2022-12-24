import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export type CoffeModel = {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
};
// export type ObjectCoffeModel = {
//   data: Array<CoffeModel>;
// };
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
// export const initialStateCoffeData: ObjectCoffeModel = {
//   data: [
//     {
//       id: '',
//       name: '',
//       address: '',
//       coordinates: '',
//       description: '',
//       images: '',
//     },
//   ],
// };
export const coffeDataSlice = createSlice({
  name: 'coffeDataState',
  initialState: initialStateCoffeData,
  reducers: {
    addDataCoffe(state, action: PayloadAction<CoffeModel>) {
      //console.log(state)
      //console.log(action)
      state.pop();
      state.push(action.payload);
    },
  },
});

export default coffeDataSlice.reducer;
export const {addDataCoffe} = coffeDataSlice.actions;
