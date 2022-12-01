import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import coordinateSlice from '../reduxStateSlice/coordinateSlice';
import {coffeData} from '../reduToolKitQuery';
import tokenSlice from '../reduxStateSlice/tokenSlice';
import dataSlice from '../reduxStateSlice/dataSlice';
import navigateController from '../reduxStateSlice/navigateController';

const rootReducer = combineReducers({
  coordinateState: coordinateSlice,
  [coffeData.reducerPath]: coffeData.reducer,
  tokenState: tokenSlice,
  coffeDataState: dataSlice,
  navigateState: navigateController,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(coffeData.middleware),
});

export default store;
