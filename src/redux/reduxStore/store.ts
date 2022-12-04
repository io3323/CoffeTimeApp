import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import coordinateSlice from '../reduxStateSlice/coordinateSlice';
import {coffeData} from '../reduToolKitQuery';
import tokenSlice from '../reduxStateSlice/tokenSlice';
import dataSlice from '../reduxStateSlice/dataSlice';
import navigateController from '../reduxStateSlice/navigateController';
import cafeInfoSlice from '../reduxStateSlice/cafeInfoSlice';
import productsCafeSlice from '../reduxStateSlice/productsCafeSlice';
import productsSlice from '../reduxStateSlice/productsSlice';

const rootReducer = combineReducers({
  coordinateState: coordinateSlice,
  [coffeData.reducerPath]: coffeData.reducer,
  tokenState: tokenSlice,
  coffeDataState: dataSlice,
  navigateState: navigateController,
  cafeInfoState: cafeInfoSlice,
  productsCafeState: productsCafeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(coffeData.middleware),
});

export default store;
