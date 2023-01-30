import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface IBasketUser {
  id: string;
  productName: string;
  price: number;
  cofeId: string;
  cofeName: string;
  imagesPath: string;
  count: number;
  prevPrice: number;
}
export const initialStateBasketUser: Array<IBasketUser> = [
  {
    id: '',
    productName: '',
    price: 0,
    cofeId: '',
    cofeName: '',
    imagesPath: '',
    count: 0,
    prevPrice: 0,
  },
];
export const basketUserSlice = createSlice({
  name: 'basketUserState',
  initialState: initialStateBasketUser,
  reducers: {
    addBasket(state, action: PayloadAction<IBasketUser>) {
      let controler = true;
      state.map((data, index) => {
        if (data.id == action.payload.id) {
          const object: IBasketUser = {
            id: action.payload.id,
            productName: action.payload.productName,
            price: data.price + data.prevPrice,
            cofeId: action.payload.cofeId,
            cofeName: action.payload.cofeName,
            imagesPath: action.payload.imagesPath,
            count: data.count + 1,
            prevPrice: action.payload.prevPrice,
          };
          state.splice(index, 1, object);
          state.pop();
        } else {
          if (controler) {
            state.push(action.payload);
            controler = false;
          }
        }
      });
    },
    deleteBasket(state, action: PayloadAction<IBasketUser>) {
      let controler = true;
      state.map((data, index) => {
        if (data.id == action.payload.id) {
          const object: IBasketUser = {
            id: action.payload.id,
            productName: action.payload.productName,
            price: data.price - data.prevPrice,
            cofeId: action.payload.cofeId,
            cofeName: action.payload.cofeName,
            imagesPath: action.payload.imagesPath,
            count: data.count - 1,
            prevPrice: action.payload.prevPrice,
          };
          state.splice(index, 1, object);
          state.pop();
        } else if (controler) {
          state.push(action.payload);
          controler = false;
        }
      });
      state.map((dataSecond, index) => {
        if (dataSecond.count == 0 && dataSecond.id != '') {
          state.splice(index, 1);
        }
      });
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.map((deleteElement, index) => {
        if (deleteElement.id == action.payload) {
          state.splice(index, 1);
        }
      });
    },
  },
});

export default basketUserSlice.reducer;
export const {addBasket, deleteBasket, deleteProduct} = basketUserSlice.actions;
