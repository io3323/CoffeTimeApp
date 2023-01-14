import store from './src/redux/reduxStore/store';
import {MainApp} from './MainApp';
import {Provider} from 'react-redux';
import React from 'react';

export const NestApp = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
