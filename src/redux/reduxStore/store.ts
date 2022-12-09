import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import coordinateSlice from '../reduxStateSlice/coordinateSlice';
import {coffeData} from '../reduToolKitQuery';
import tokenSlice from '../reduxStateSlice/tokenSlice';
import dataSlice from '../reduxStateSlice/dataSlice';
import navigateController from '../reduxStateSlice/navigateController';
import cafeInfoSlice from '../reduxStateSlice/cafeInfoSlice';
import productsCafeSlice from '../reduxStateSlice/productsCafeSlice';
import infoProductCoffeSlice from '../reduxStateSlice/infoProductCoffeSlice';
import basketUserSlice from '../reduxStateSlice/basketUserSlice';
import counterSlice from '../reduxStateSlice/counterSlice';
import basketObjectSlice from '../reduxStateSlice/basketObjectSlice';
import coordinateMasSplice from '../reduxStateSlice/coordinateMasSplice';

const rootReducer = combineReducers({
  coordinateState: coordinateSlice,
  [coffeData.reducerPath]: coffeData.reducer,
  tokenState: tokenSlice,
  coffeDataState: dataSlice,
  navigateState: navigateController,
  cafeInfoState: cafeInfoSlice,
  productsCafeState: productsCafeSlice,
  infoProductCoffeState: infoProductCoffeSlice,
  basketUserState: basketUserSlice,
  counterState: counterSlice,
  basketObjectState: basketObjectSlice,
  coordinateMasState: coordinateMasSplice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(coffeData.middleware),
});

export default store;
