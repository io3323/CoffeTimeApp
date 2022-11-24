import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from '../navigator/MainNavigator';
import {SafeAreaView, Text, View} from 'react-native';

export const MainScreenName = 'MainScreen';
export const MainScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <MainNavigator/>
    </NavigationContainer>
  );
};
