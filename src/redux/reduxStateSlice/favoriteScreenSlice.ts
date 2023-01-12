import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProductCafeModel} from '../reduToolKitQuery/interfacesCoffeData';
const initialFavoriteScreen: Array<IProductCafeModel> = [
  {
    id: '',
    cofeId: '',
    name: '',
    price: 0,
    favorite: false,
    imagesPath: '',
  },
];
export const favoriteScreenSlice = createSlice({
  name: 'favoriteScreenState',
  initialState: initialFavoriteScreen,
  reducers: {
    cloneMassive(state, action: PayloadAction<Array<IProductCafeModel>>) {
      const lenghtState = state.length;
      let counter = 0;
      if (lenghtState != 0) {
        while (lenghtState != counter) {
          state.pop();
          counter += 1;
        }
      }
      action.payload.map(favoriteProduct => {
        if (favoriteProduct.id != '') {
          state.push(favoriteProduct);
        }
      });
    },
  },
});

export default favoriteScreenSlice.reducer;
export const {cloneMassive} = favoriteScreenSlice.actions;
