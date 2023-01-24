import {StyleSheet, View} from 'react-native';
import {SettingsThemeSwitch} from './SettingsThemeSwitch';
import {SettingsLanguageSwitch} from './SettingsLanguageSwitch';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {light} from '../../../../themeNameApp';
import {colorObjectDrawer} from '../../../customComponents/customHeader/nestedElement/colorObjectNestedComponent/colorObjectDrawer';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useEffect} from 'react';
import {toggleSwitch} from '../../../../redux/reduxStateSlice/switchThemeControllerSlice';
import Animated from 'react-native-reanimated';
export const SettingsMenuDetail = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const switchThemeControllerState = useSelector(
    (state: RootState) => state.switchThemeControllerState,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (switchThemeControllerState) {
      progressOpacity.value = withTiming(1, {duration: 700});
      progressScale.value = withTiming(100, {duration: 700});
      progressLocalOpacity.value = withTiming(0, {duration: 300});
      setTimeout(() => (progressOpacity.value = withSpring(0)), 1000);
      setTimeout(
        () => (progressScale.value = withTiming(1, {duration: 400})),
        1000,
      );
      setTimeout(
        () => (progressLocalOpacity.value = withTiming(1, {duration: 500})),
        1000,
      );
      dispatch(toggleSwitch());
    }
  }, [switchThemeControllerState]);
  const progressScale = useSharedValue(1);
  const progressOpacity = useSharedValue(0);
  const progressLocalOpacity = useSharedValue(1);
  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: progressOpacity.value,
      transform: [{scale: progressScale.value}],
    };
  });
  const rStyleLocalSwitch = useAnimatedStyle(() => {
    return {
      opacity: progressLocalOpacity.value,
    };
  });
  return (
    <View
      style={[
        themeState.theme == light ? styles.colorLight : styles.colorDark,
        styles.mainContainer,
      ]}>
      <Animated.View
        style={[
          {
            width: 40,
            height: 40,
            position: 'absolute',
            borderRadius: 100,
            top: '15%',
            right: themeState.theme == light ? '51%' : '16%',
          },
          {
            backgroundColor:
              themeState.theme == light
                ? '#f3e9d8'
                : colorObjectDrawer.drawerConteinerDarkBack,
          },
          rStyle,
        ]}
      />
      <SettingsThemeSwitch />
      <View style={styles.separatorStyle} />
      <Animated.View style={rStyleLocalSwitch}>
        <SettingsLanguageSwitch />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLight: {
    backgroundColor: '#f3e9d8',
  },
  colorDark: {
    backgroundColor: '#3a3450',
  },
  separatorStyle: {
    marginTop: 10,
  },
});
