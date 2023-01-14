import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/reduxStore/store';
import {MainApp} from './MainApp';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView, Text, View} from 'react-native';
import {NestApp} from './NestApp';
const App = () => {
  return <NestApp />;
};

export default App;
