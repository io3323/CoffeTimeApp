import React from 'react';
import {Provider} from 'react-redux';
import store from '../../../redux/reduxStore/store';
import {NestedButtonElement} from './nestedElement/button/NestedButtonElement';
export const CustomBackButton = () => {
  return (
    <Provider store={store}>
      <NestedButtonElement />
    </Provider>
  );
};
