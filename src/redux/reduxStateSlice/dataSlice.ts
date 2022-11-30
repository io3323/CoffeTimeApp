import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export type InlineModel1 = {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
};
// export type InlineModel = {
//   data: [InlineModel1];
// };

// export const initialStateCoffeData: InlineModel = {
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
export const initialStateCoffeData: Array<InlineModel1> = [
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
    addDataCoffe(state, action: PayloadAction<InlineModel1>) {
      // state.data.pop();
      // state.data.push(action.payload);
      state.pop();
      state.push(action.payload);
    },
  },
});

export default coffeDataSlice.reducer;
export const {addDataCoffe} = coffeDataSlice.actions;
