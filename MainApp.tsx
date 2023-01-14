import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {changeState} from './src/redux/reduxStateSlice/backButtonControllerSlice';
import {AuthNavigator} from './src/navigation/navigator/AuthNavigator';

export const MainApp = () => {
  const routeNameRef: React.MutableRefObject<string | undefined> =
    React.useRef();
  const navigationRef = useNavigationContainerRef();
  const dispatch = useDispatch();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name)
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        if (previousRouteName !== currentRouteName) {
          dispatch(changeState(currentRouteName));
        }
        routeNameRef.current = currentRouteName;
      }}>
      <AuthNavigator />
    </NavigationContainer>
  );
};
