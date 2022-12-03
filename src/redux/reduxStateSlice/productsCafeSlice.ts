import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProductCafeModel} from '../reduToolKitQuery';
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
export const ProductsCafeSlice = createSlice({
  name: 'productsCafeState',
  initialState: initialStateProductsCafe,
  reducers: {
    addProducts(state, action: PayloadAction<IProductCafeModel>) {
      state.pop();
      state.push(action.payload);
    },
  },
});

export default ProductsCafeSlice.reducer;
export const {addProducts} = ProductsCafeSlice.actions;
