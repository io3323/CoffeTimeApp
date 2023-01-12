import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProductCafeModel} from '../reduToolKitQuery/interfacesCoffeData';
export const initailFavoriteProductState: Array<IProductCafeModel> = [
  {
    id: '',
    cofeId: '',
    name: '',
    price: 0,
    favorite: false,
    imagesPath: '',
  },
];
type ModelActionFavorite = {
  id: string;
  cofeId: string;
  name: string;
  price: number;
  favorite?: boolean;
  imagesPath: string;
};
export const favoriteProductSlice = createSlice({
  name: 'favoriteProductState',
  initialState: initailFavoriteProductState,
  reducers: {
    addFavoriteProduct(state, action: PayloadAction<ModelActionFavorite>) {
      let lenghtState = state.length;
      let counter = 0;
      state.map((product, index) => {
        counter += 1;
        if (product.id === action.payload.id) {
          state.splice(index, 1);
        }
        if (
          product.id !== action.payload.id &&
          lenghtState === counter &&
          (product.favorite === false || product.favorite === undefined)
        ) {
          const favoriteProduct: IProductCafeModel = {
            id: action.payload.id,
            cofeId: action.payload.cofeId,
            name: action.payload.name,
            price: action.payload.price,
            favorite: true,
            imagesPath: action.payload.imagesPath,
          };
          state.push(favoriteProduct);
        }
        if (
          product.id !== action.payload.id &&
          lenghtState === counter &&
          product.favorite === true
        ) {
          const favoriteProduct: IProductCafeModel = {
            id: action.payload.id,
            cofeId: action.payload.cofeId,
            name: action.payload.name,
            price: action.payload.price,
            favorite: false,
            imagesPath: action.payload.imagesPath,
          };
          state.splice(index, 0, favoriteProduct);
        }
      });
    },
  },
});

export default favoriteProductSlice.reducer;
export const {addFavoriteProduct} = favoriteProductSlice.actions;
