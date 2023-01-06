import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  IProductCafeModel,
  IProductCafeModelV2,
} from '../reduToolKitQuery/interfacesCoffeData';
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
    addProducts(state, action: PayloadAction<IProductCafeModelV2>) {
      const lenghtState = state.length;
      if (lenghtState == 1) {
        state.pop();
      } else if (lenghtState > 1) {
        let counter = 0;
        while (counter != lenghtState) {
          state.pop();
          counter += 1;
        }
      }
      const firstNest = Object.values(action.payload);
      firstNest.map((dataProductCoffe: Array<IProductCafeModel>) => {
        dataProductCoffe.map(nestDataProduct => {
          state.push(nestDataProduct);
        });
      });
    },
  },
});

export default ProductsCafeSlice.reducer;
export const {addProducts} = ProductsCafeSlice.actions;
