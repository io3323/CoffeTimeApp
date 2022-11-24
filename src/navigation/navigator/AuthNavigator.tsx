import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {AuthScreen, AuthScreenName} from '../screens/AuthScreen';
import React from 'react';
import {SecondScreen, SecondScreenName} from '../screens/SecondScreen';
import {RegistScreen, RegistScreenName} from '../screens/RegistScreen';
import {MainScreen, MainScreenName} from '../screens/MainScreen';
import {CustomBackButton} from '../../components/customComponents/customHeader/CustomBackButton';
import { Text, View } from "react-native";
import { CustomHeaderTitle } from "../../components/customComponents/customHeader/CustomHeaderTitle";

export const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  const AuthStack = () => {
    return (
      <Stack.Navigator>
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
        <Stack.Screen
          name={MainScreenName}
          component={MainScreen}
          options={{
            headerStyle: {
              backgroundColor: '#EAEAEA',
            },
            headerLeft: () => <CustomBackButton />,
            headerCenter: () => <CustomHeaderTitle />,
          }}
        />
      </Stack.Navigator>
    );
  };
  const MainStack = createNativeStackNavigator();
  // @ts-ignore
  return (
    <MainStack.Navigator initialRouteName="App">
      <MainStack.Screen
        name={'Stack'}
        component={AuthStack}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};
