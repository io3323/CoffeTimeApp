import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from '../navigator/MainNavigator';
import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
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
