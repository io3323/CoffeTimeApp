import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {AuthScreen, AuthScreenName} from '../screens/AuthScreen';
import React from 'react';
import {SecondScreen, SecondScreenName} from '../screens/SecondScreen';
import {RegistScreen, RegistScreenName} from '../screens/RegistScreen';

export const Navigator = () => {
  const Stack = createNativeStackNavigator();
  // @ts-ignore
  return (
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen
        name={AuthScreenName}
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={SecondScreenName} component={SecondScreen} />
      <Stack.Screen
        name={RegistScreenName}
        component={RegistScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
