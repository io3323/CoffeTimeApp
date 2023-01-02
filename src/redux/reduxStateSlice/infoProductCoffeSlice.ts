import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProductFullInfo} from '../reduToolKitQuery/interfacesCoffeData';

const initialStateProductCoffeSlice: IProductFullInfo = {
  id: '',
  productName: '',
  price: 0,
  cofeId: '',
  cofeName: '',
  favarite: false,
  attribute: [
    {
      id: '',
      description: '',
      iconType: '',
    },
  ],
  imagesPath: '',
};
export const infoProductCoffeSlice = createSlice({
  name: 'infoProductCoffeState',
  initialState: initialStateProductCoffeSlice,
  reducers: {
    addInfoCeffeProduct(state, action: PayloadAction<IProductFullInfo>) {
      state.id = action.payload.id;
      state.productName = action.payload.productName;
      state.price = action.payload.price;
      state.cofeId = action.payload.cofeId;
      state.cofeName = action.payload.cofeName;
      state.favarite = action.payload.favarite;
      state.attribute = action.payload.attribute;
      state.imagesPath = action.payload.imagesPath;
    },
    backInitialStateInfoProductCoffe(state) {
      state = initialStateProductCoffeSlice;
    },
  },
});

export default infoProductCoffeSlice.reducer;
export const {addInfoCeffeProduct, backInitialStateInfoProductCoffe} = infoProductCoffeSlice.actions;
