import {NavigationContainer, useNavigation} from '@react-navigation/native';
import MainNavigator from '../navigator/MainNavigator';
import {Provider, useSelector} from 'react-redux';
import store, {RootState} from '../../redux/reduxStore/store';
import {useEffect} from 'react';
import {navigateController} from '../../redux/reduxStateSlice/navigateController';
export const MainScreenName = 'MainScreen';
export const MainScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    // @ts-ignore
    navigation.navigate('DetailedInfo');
  };
  // useEffect(() => handleNavigation, [navigateController]);
  return (
    <NavigationContainer independent={true}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
};
