import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type Atributes = {id: string; description: string; iconType: string};
interface IProductInf {
  id: string;
  productName: string;
  price: number;
  cofeId: string;
  cofeName: string;
  favarite: boolean;
  imagesPath: string;
  description: String;
  attribute: Array<Atributes>;
}

const initialState: IProductInf = {
  id: '',
  productName: '',
  price: 0,
  cofeId: '',
  cofeName: '',
  favarite: false,
  imagesPath: '',
  description: '',
  attribute: [{id: '', description: '', iconType: ''}],
};

export const productInfoNoRegSlice = createSlice({
  name: 'productInfoNoRegState',
  initialState: initialState,
  reducers: {
    setProductInfoNoRegSlice(state, {payload}: PayloadAction<IProductInf>) {
      state.id = payload.id;
      state.productName = payload.productName;
      state.attribute = payload.attribute;
      state.cofeId = payload.cofeId;
      state.cofeName = payload.cofeName;
      state.price = payload.price;
      state.favarite = payload.favarite;
      state.imagesPath = payload.imagesPath;
      state.description = payload.description;
    },
  },
});

export default productInfoNoRegSlice.reducer;
export const {setProductInfoNoRegSlice} = productInfoNoRegSlice.actions;
