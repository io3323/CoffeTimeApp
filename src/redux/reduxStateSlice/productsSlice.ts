import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProductCafeModel} from '../reduToolKitQuery/interfacesCoffeData';

const initialStateProductsCafe: Array<IProductCafeModel> = [
  {
    id: '',
    cofeId: '',
    name: '',
    price: 0,
    favorite: false,
    imagesPath: '',
  },
];
export const ProductsSlice = createSlice({
  name: 'productsState',
  initialState: initialStateProductsCafe,
  reducers: {
    addProduct(state, action: PayloadAction<IProductCafeModel>) {
      state.pop();
      state.push(action.payload);
    },
  },
});

export default ProductsSlice.reducer;
export const {addProduct} = ProductsSlice.actions;
