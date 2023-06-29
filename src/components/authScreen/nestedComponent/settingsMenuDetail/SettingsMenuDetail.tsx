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
import {Color} from '../../../../Color';
import {SettingsDevModeSwitch} from './SettingsDevModeSwitch';
export const SettingsMenuDetail = () => {
  const {animatedContainer} = Color.authColorObject.settings.settingsMain;
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
                ? animatedContainer.light
                : animatedContainer.dark,
          },
          rStyle,
        ]}
      />
      <SettingsThemeSwitch />
      <View style={styles.separatorStyle} />
      <Animated.View style={rStyleLocalSwitch}>
        <SettingsLanguageSwitch />
      </Animated.View>
      <Animated.View style={rStyleLocalSwitch}>
        <SettingsDevModeSwitch />
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
    backgroundColor:
      Color.authColorObject.settings.settingsMain.mainContainer.light,
  },
  colorDark: {
    backgroundColor:
      Color.authColorObject.settings.settingsMain.mainContainer.dark,
  },
  separatorStyle: {
    marginTop: 10,
  },
});
