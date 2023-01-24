import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from '../screens/AuthScreen';
import React from 'react';
import {RegistScreen} from '../screens/RegistScreen';
import {DetailedInfo} from '../screens/DetailedInfo';
import {MapScreen, MapScreenName} from '../screens/MapScreen';
import {CustomMapIcon} from '../../components/customComponents/customSegmentedControlIcon/CustomMapIcon';
import {ListCoffeScreen, ListCoffeScreenName} from '../screens/ListCoffeScreen';
import {CustomListIcon} from '../../components/customComponents/customSegmentedControlIcon/CustomListIcon';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DetailProductInfo} from '../screens/DetailProductInfo';
import {OrderScreen} from '../screens/OrderScreen';
import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {
  AuthScreenName,
  DetailedInfoName,
  DetailProductInfoName,
  FavoriteCoffeScreenName,
  LoaderScreenName,
  NameTabStack,
  OrderScreenName,
  RegistScreenName,
  SplachScreenName,
} from './nameScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../../components/customComponents/customHeader/CustomDrawer';
import {LoaderScreen} from '../screens/LoaderScreen';
import {FavoriteCoffeScreen} from '../screens/FavoriteCoffeScreen';
import {SplachScreen} from '../screens/SplachScreen';
import {CustomTabBar} from '../../components/customComponents/customTabBar/CustomTabBar';
import {CustomHeaderComponent} from '../../components/customComponents/customHeader/customHeaderElement/CustomHeaderComponent';
export const AuthNavigator = () => {
  const Drawer = createDrawerNavigator();
  const Tab = createMaterialTopTabNavigator();
  const TabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName={'Map'}
        tabBar={props => <CustomTabBar {...props} />}>
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
            name={SplachScreenName}
            component={SplachScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={AuthScreenName}
            component={AuthScreen}
            options={{headerShown: false}}
          />
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
            name={LoaderScreenName}
            component={LoaderScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NameTabStack}
            component={TabStack}
            options={{
              header: () => <CustomHeaderComponent />,
              headerShown: true,
            }}
          />
          <Stack.Screen
            name={DetailedInfoName}
            component={DetailedInfo}
            options={{
              headerShown: true,
              header: () => <CustomHeaderComponent />,
            }}
          />
          <Stack.Screen
            name={DetailProductInfoName}
            component={DetailProductInfo}
            options={{
              headerShown: true,
              header: () => <CustomHeaderComponent />,
            }}
          />
          <Stack.Screen
            name={OrderScreenName}
            component={OrderScreen}
            options={{
              headerShown: true,
              header: () => <CustomHeaderComponent />,
            }}
          />
          <Stack.Screen
            name={FavoriteCoffeScreenName}
            component={FavoriteCoffeScreen}
            options={{
              headerShown: true,
              header: () => <CustomHeaderComponent />,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    );
  };
  return (
    <Provider store={store}>
      <Drawer.Navigator
        screenOptions={{
          swipeEnabled: false,
        }}
        drawerContent={() => <CustomDrawer />}
        initialRouteName="App">
        <Drawer.Screen
          name={'Stack'}
          component={AuthStack}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </Provider>
  );
};
