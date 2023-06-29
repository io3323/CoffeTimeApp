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
    id: '1',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',

    images: '',
  },
  {
    id: '2',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
  },
  {
    id: '3',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
  },
  {
    id: '4',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
  },
  {
    id: '5',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
  },
  {
    id: '6',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
  },
  {
    id: '7',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
  },
  {
    id: '8',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
  },
  {
    id: '9',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
  },
  {
    id: '10',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
  },
];
export const coffeDataNoRegSlice = createSlice({
  name: 'coffeDataNoRegState',
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

export default coffeDataNoRegSlice.reducer;
export const {addDataCoffe} = coffeDataNoRegSlice.actions;
