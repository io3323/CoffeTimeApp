import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from '../screens/AuthScreen';
import React from 'react';
import {RegistScreen} from '../screens/RegistScreen';
import {CustomBackButton} from '../../components/customComponents/customHeader/CustomBackButton';
import {CustomHeaderTitle} from '../../components/customComponents/customHeader/CustomHeaderTitle';
import {DetailedInfo} from '../screens/DetailedInfo';
import {MapScreen, MapScreenName} from '../screens/MapScreen';
import {CustomMapIcon} from '../../components/customComponents/customSegmentedControlIcon/CustomMapIcon';
import {ListCoffeScreen, ListCoffeScreenName} from '../screens/ListCoffeScreen';
import {CustomListIcon} from '../../components/customComponents/customSegmentedControlIcon/CustomListIcon';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DetailProductInfo} from '../screens/DetailProductInfo';
import {OrderScreen} from '../screens/OrderScreen';
import {CustomBagShopButton} from '../../components/customComponents/customHeader/nestedElement/CustomBagShopButton';
import {ShopListButton} from '../../components/customComponents/customHeader/ShopListButton';
import {Provider, useSelector} from 'react-redux';
import store, {RootState} from '../../redux/reduxStore/store';
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
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../../components/customComponents/customHeader/CustomDrawer';
import {light} from '../../themeNameApp';
import {LoaderScreen} from '../screens/LoaderScreen';
import {FavoriteCoffeScreen} from '../screens/FavoriteCoffeScreen';
import {SplachScreen} from '../screens/SplachScreen';
export const AuthNavigator = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const Drawer = createDrawerNavigator();
  const Tab = createMaterialTopTabNavigator();
  const TabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName={'Map'}
        style={
          themeState.theme == light
            ? styles.mainTabBarLight
            : styles.mainTabBarDark
        }
        screenOptions={{
          tabBarStyle:
            themeState.theme == light
              ? styles.tabBarStyleTabNavLight
              : styles.tabBarStyleTabNavDark,
          tabBarIndicatorStyle:
            themeState.theme == light
              ? styles.tabBarIndicatorStyleTabNavLight
              : styles.tabBarIndicatorStyleTabNavDark,
          tabBarLabelStyle: styles.tabBarLabelStyleTabNav,
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
              headerShown: true,
              headerStyle:
                themeState.theme == light
                  ? styles.headerStyleStackScreenLight
                  : styles.headerStyleStackScreenDark,
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
              headerStyle:
                themeState.theme == light
                  ? styles.headerStyleStackScreenLight
                  : styles.headerStyleStackScreenDark,
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
              headerStyle:
                themeState.theme == light
                  ? styles.headerStyleStackScreenLight
                  : styles.headerStyleStackScreenDark,
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
              headerStyle:
                themeState.theme == light
                  ? styles.headerStyleStackScreenLight
                  : styles.headerStyleStackScreenDark,
              headerTitleAlign: 'center',
              headerBackVisible: false,
              headerLeft: () => <CustomBackButton />,
              headerTitle: () => <CustomHeaderTitle />,
            }}
          />
          <Stack.Screen
            name={FavoriteCoffeScreenName}
            component={FavoriteCoffeScreen}
            options={{
              headerShown: true,
              headerStyle:
                themeState.theme == light
                  ? styles.headerStyleStackScreenLight
                  : styles.headerStyleStackScreenDark,
              headerTitleAlign: 'center',
              headerBackVisible: false,
              headerLeft: () => <CustomBackButton />,
              headerTitle: () => <CustomHeaderTitle />,
              headerRight: () => <ShopListButton />,
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

const styles = StyleSheet.create({
  mainTabBarLight: {
    backgroundColor: '#f2f2f2',
  },
  mainTabBarDark: {
    backgroundColor: '#574d6c',
  },
  tabBarStyleTabNavLight: {
    width: 130,
    height: 35,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'black',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  tabBarStyleTabNavDark: {
    width: 130,
    height: 35,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'white',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#574d6c',
    alignSelf: 'center',
  },
  tabBarIndicatorStyleTabNavLight: {
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
  tabBarIndicatorStyleTabNavDark: {
    backgroundColor: 'red',
    borderWidth: 14,
    borderRadius: 20,
    borderColor: '#9989d9',
    marginLeft: 4,
    marginRight: 1,
    marginTop: 10,
    marginBottom: 2,
    width: 55,
  },
  tabBarLabelStyleTabNav: {
    color: 'red',
    marginTop: -10,
  },
  headerStyleStackScreenLight: {
    backgroundColor: '#EAEAEA',
  },
  headerStyleStackScreenDark: {
    backgroundColor: '#3a3450',
  },
  drawerStyle: {
    backgroundColor: '#c5b4a0',
  },
});
