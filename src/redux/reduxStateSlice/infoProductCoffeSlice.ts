import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  InfoProductCoffeModel,
  IProductFullInfo,
} from '../reduToolKitQuery/interfacesCoffeData';
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
    addInfoCeffeProduct(state, action: PayloadAction<InfoProductCoffeModel>) {
      const first = Object.values(action.payload);
      first.map((data: IProductFullInfo) => {
        state.id = data.id;
        state.productName = data.productName;
        state.price = data.price;
        state.cofeId = data.cofeId;
        state.attribute = data.attribute;
        state.imagesPath = data.imagesPath;
        state.favarite = data.favarite;
        state.cofeName = data.cofeName;
      });
    },
  },
});

export default infoProductCoffeSlice.reducer;
export const {addInfoCeffeProduct} = infoProductCoffeSlice.actions;
