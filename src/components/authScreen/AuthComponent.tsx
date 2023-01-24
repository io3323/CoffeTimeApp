import image from '../../assets/image/authScreen/fon.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  ImageBackground,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import LoginForm from './nestedComponent/LoginForm';
import {useEffect, useState} from 'react';
import {TextAuthComponent} from './nestedComponent/TextAuthComponent';
import {SettingsIcon} from './nestedComponent/SettingsIcon';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {light} from '../../themeNameApp';
import {
  linerGradientColorsDark,
  linerGradientColorsLight,
} from '../detailComponent/nestedComponent/DetailComponentColor';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {changeStatusController} from '../../redux/reduxStateSlice/settingsControllerSlice';
import {HEIGHT_APP, WIDTH_APP} from '../../definitionSize';
export const AuthComponent = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.themeState);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  });
  const functrionDispatch = (stateController: boolean) => {
    dispatch(changeStatusController(stateController));
  };
  const gesture = useAnimatedGestureHandler({
    onStart: () => {
      runOnJS(functrionDispatch)(false);
    },
  });
  return (
    <ImageBackground style={styles.viewContainer} source={image}>
      <LinearGradient
        colors={
          themeState.theme == light
            ? linerGradientColorsLight
            : linerGradientColorsDark
        }>
        <SafeAreaView style={styles.viewStyle}>
          <View>
            <TextAuthComponent />
          </View>
          <KeyboardAwareScrollView
            extraHeight={150}
            extraScrollHeight={30}
            enableOnAndroid={true}
            scrollEnabled={keyboardStatus}>
            <LoginForm />
          </KeyboardAwareScrollView>
          <PanGestureHandler onGestureEvent={gesture}>
            <Animated.View
              style={[
                {
                  height: HEIGHT_APP * 0.25,
                },
              ]}
            />
          </PanGestureHandler>
          <Animated.View
            style={[
              {
                position: 'absolute',
                marginTop: HEIGHT_APP * 0.83,
                marginLeft: WIDTH_APP * 0.8,
              },
            ]}>
            <SettingsIcon />
          </Animated.View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '100%',
  },
  viewStyle: {
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  keyboardConteiner: {
    flex: 1,
  },
  buttonConteiner: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'red',
  },
  registConteiner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
