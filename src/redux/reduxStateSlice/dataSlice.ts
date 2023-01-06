import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICoffeDataV2} from '../reduToolKitQuery/interfacesCoffeData';

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
    addDataCoffe(state, action: PayloadAction<ICoffeDataV2>) {
      const dataUser = action.payload;
      const first = Object.values(dataUser);
      const lenghtState = state.length;
      if (state.length == 1) {
        state.pop();
      } else if (state.length > 1) {
        let counter = 0;
        while (counter != lenghtState) {
          state.pop();
          counter += 1;
        }
      }
      first.map(data => {
        const second: Array<CoffeModel> = Object.values(data);
        second.map(dataCoffe => {
          state.push(dataCoffe);
        });
      });
    },
  },
});

export default coffeDataSlice.reducer;
export const {addDataCoffe} = coffeDataSlice.actions;
