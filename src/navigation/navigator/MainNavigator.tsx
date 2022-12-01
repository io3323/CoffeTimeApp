import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MapScreen} from '../screens/MapScreen';
import {ListCoffeScreen} from '../screens/ListCoffeScreen';
import React from 'react';
import {CustomMapIcon} from '../../components/customComponents/customSegmentedControlIcon/CustomMapIcon';
import {CustomListIcon} from '../../components/customComponents/customSegmentedControlIcon/CustomListIcon';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {DetailedInfo} from '../screens/DetailedInfo';
import {CustomMainBackButton} from '../../components/customComponents/customHeader/CustomMainBackButton';
const MainNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  const Stack = createNativeStackNavigator();
  const TabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName={'MainScreen'}
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
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Main Screen'}
        component={TabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'DetailedInfo'}
        component={DetailedInfo}
        options={{headerLeft: () => <CustomMainBackButton />}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
