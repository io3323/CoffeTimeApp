import {NavigationContainer, useNavigation} from '@react-navigation/native';
import MainNavigator from '../navigator/MainNavigator';
import { connect, Provider, useSelector } from "react-redux";
import store, {RootState} from '../../redux/reduxStore/store';
import React, {useEffect} from 'react';
export const MainScreenName = 'MainScreen';
export const MainScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
};
