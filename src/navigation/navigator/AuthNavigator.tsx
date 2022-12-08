import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {AuthScreen, AuthScreenName} from '../screens/AuthScreen';
import React from 'react';
import {SecondScreen, SecondScreenName} from '../screens/SecondScreen';
import {RegistScreen, RegistScreenName} from '../screens/RegistScreen';
import {CustomBackButton} from '../../components/customComponents/customHeader/CustomBackButton';
import {CustomHeaderTitle} from '../../components/customComponents/customHeader/CustomHeaderTitle';
import {DetailedInfo} from '../screens/DetailedInfo';
import {SecondTestScreen} from '../screens/SecondTestScreen';
import {MapScreen} from '../screens/MapScreen';
import {CustomMapIcon} from '../../components/customComponents/customSegmentedControlIcon/CustomMapIcon';
import {ListCoffeScreen} from '../screens/ListCoffeScreen';
import {CustomListIcon} from '../../components/customComponents/customSegmentedControlIcon/CustomListIcon';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DetailProductInfo} from '../screens/DetailProductInfo';
import {OrderScreen} from '../screens/OrderScreen';
import {CustomBagShopButton} from '../../components/customComponents/customHeader/CustomBagShopButton';

export const AuthNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  const TabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName={'Map'}
        screenOptions={{
          tabBarStyle: {
            width: 130,
            height: 35,
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 40,
            marginLeft: 120,
            marginTop: 10,
            marginBottom: 10,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'red',
            borderWidth: 14,
            borderRadius: 20,
            borderColor: '#C8D9AF',
            marginLeft: 4,
            marginRight: 1,
            marginTop: 10,
            marginBottom: 2,
            width: 55,
          },
          tabBarLabelStyle: {
            color: 'red',
            marginTop: -10,
          },
        }}>
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarShowLabel: false,
            tabBarBadge: () => <CustomMapIcon />,
          }}
        />
        <Tab.Screen
          name="List"
          component={ListCoffeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarBadge: () => <CustomListIcon />,
          }}
        />
      </Tab.Navigator>
    );
  };
  const Stack = createNativeStackNavigator();
  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Group>
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
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name={'TabStack'}
            component={TabStack}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#EAEAEA',
              },
              headerLeft: () => <CustomBackButton />,
              headerCenter: () => <CustomHeaderTitle />,
              headerRight: () => <CustomBagShopButton />,
            }}
          />
          <Stack.Screen
            name={'DetailedInfo'}
            component={DetailedInfo}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#EAEAEA',
              },
              headerLeft: () => <CustomBackButton />,
              headerCenter: () => <CustomHeaderTitle />,
              headerRight: () => <CustomBagShopButton />,
            }}
          />
          <Stack.Screen
            name={'DetailProductInfo'}
            component={DetailProductInfo}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#EAEAEA',
              },
              headerLeft: () => <CustomBackButton />,
              headerCenter: () => <CustomHeaderTitle />,
              headerRight: () => <CustomBagShopButton />,
            }}
          />
          <Stack.Screen
            name={'OrderScreen'}
            component={OrderScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#EAEAEA',
              },
              headerLeft: () => <CustomBackButton />,
              headerCenter: () => <CustomHeaderTitle />,
            }}
          />
          <Stack.Screen name={'SecondTest'} component={SecondTestScreen} />
        </Stack.Group>
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
