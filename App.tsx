import React from 'react';

import {AuthNavigator} from './src/navigation/navigator/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
