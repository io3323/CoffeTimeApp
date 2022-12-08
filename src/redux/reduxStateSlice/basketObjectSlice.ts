import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IBasketObject {
  id: string;
  productName: string;
  price: number;
  cofeId: string;
  cofeName: string;
  imagesPath: string;
  count: number;
  prevPrice: number;
}

const initialBasketObject: IBasketObject = {
  id: '',
  productName: '',
  price: 0,
  cofeId: '',
  cofeName: '',
  imagesPath: '',
  count: 0,
  prevPrice: 0,
};
export const basketObjectSlice = createSlice({
  name: 'basketObjectState',
  initialState: initialBasketObject,
  reducers: {
    addBacketObject(state, action: PayloadAction<IBasketObject>) {
      const actionPayloud = action.payload;
      state.id = actionPayloud.id;
      state.productName = actionPayloud.productName;
      state.price = actionPayloud.price;
      state.cofeId = actionPayloud.cofeId;
      state.cofeName = actionPayloud.cofeName;
      state.imagesPath = actionPayloud.imagesPath;
      state.count = actionPayloud.count;
      state.prevPrice = action.payload.prevPrice;
    },
  },
});

export default basketObjectSlice.reducer;
export const {addBacketObject} = basketObjectSlice.actions;
