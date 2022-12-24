import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from '../screens/AuthScreen';
import React from 'react';
import {SecondScreen, SecondScreenName} from '../screens/SecondScreen';
import {RegistScreen} from '../screens/RegistScreen';
import {CustomBackButton} from '../../components/customComponents/customHeader/CustomBackButton';
import {CustomHeaderTitle} from '../../components/customComponents/customHeader/CustomHeaderTitle';
import {DetailedInfo} from '../screens/DetailedInfo';
import {SecondTestScreen} from '../screens/SecondTestScreen';
import {MapScreen, MapScreenName} from '../screens/MapScreen';
import {CustomMapIcon} from '../../components/customComponents/customSegmentedControlIcon/CustomMapIcon';
import {ListCoffeScreen, ListCoffeScreenName} from '../screens/ListCoffeScreen';
import {CustomListIcon} from '../../components/customComponents/customSegmentedControlIcon/CustomListIcon';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DetailProductInfo} from '../screens/DetailProductInfo';
import {OrderScreen} from '../screens/OrderScreen';
import {CustomBagShopButton} from '../../components/customComponents/customHeader/CustomBagShopButton';
import {ShopListButton} from '../../components/customComponents/customHeader/ShopListButton';
import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {
  AuthScreenName,
  DetailedInfoName,
  DetailProductInfoName,
  NameTabStack,
  OrderScreenName,
  RegistScreenName,
} from './nameScreen';
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
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 10,
            alignSelf: 'center',
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
          name={MapScreenName}
          component={MapScreen}
          options={{
            tabBarShowLabel: false,
            tabBarBadge: () => <CustomMapIcon />,
          }}
        />
        <Tab.Screen
          name={ListCoffeScreenName}
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
            name={NameTabStack}
            component={TabStack}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#EAEAEA',
              },
              headerLeft: () => <CustomBackButton />,
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <CustomHeaderTitle />,
              headerRight: () => <CustomBagShopButton />,
            }}
          />
          <Stack.Screen
            name={DetailedInfoName}
            component={DetailedInfo}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#EAEAEA',
              },
              headerTitleAlign: 'center',
              headerBackVisible: false,
              headerLeft: () => <CustomBackButton />,
              headerTitle: () => <CustomHeaderTitle />,
              headerRight: () => <ShopListButton />,
            }}
          />
          <Stack.Screen
            name={DetailProductInfoName}
            component={DetailProductInfo}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#EAEAEA',
              },
              headerTitleAlign: 'center',
              headerBackVisible: false,
              headerLeft: () => <CustomBackButton />,
              headerTitle: () => <CustomHeaderTitle />,
              headerRight: () => <ShopListButton />,
            }}
          />
          <Stack.Screen
            name={OrderScreenName}
            component={OrderScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#EAEAEA',
              },
              headerTitleAlign: 'center',
              headerBackVisible: false,
              headerLeft: () => <CustomBackButton />,
              headerTitle: () => <CustomHeaderTitle />,
            }}
          />
          <Stack.Screen name={'SecondTest'} component={SecondTestScreen} />
        </Stack.Group>
      </Stack.Navigator>
    );
  };
  const MainStack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <MainStack.Navigator initialRouteName="App">
        <MainStack.Screen
          name={'Stack'}
          component={AuthStack}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </Provider>
  );
};
