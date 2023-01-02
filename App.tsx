import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/reduxStore/store';
import {MainApp} from './MainApp';
const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
