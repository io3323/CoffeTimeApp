import image from '../../assets/image/authScreen/fon.png';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import LoginForm from './nestedComponent/LoginForm';
import {TextAuthComponent} from './nestedComponent/TextAuthComponent';
import {SettingsIcon} from './nestedComponent/SettingsIcon';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {light} from '../../themeNameApp';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {changeStatusController} from '../../redux/reduxStateSlice/settingsControllerSlice';
import {HEIGHT_APP, WIDTH_APP} from '../../definitionSize';
import {KeyboardCheck} from '../generalComponent/KeyboardCheck';
import {Color} from '../../Color';
export const AuthComponent = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.themeState);
  const keyboardStatusState = useSelector(
    (state: RootState) => state.keyboardStatusState,
  );
  const functrionDispatch = (stateController: boolean) => {
    dispatch(changeStatusController(stateController));
  };
  const gesture = useAnimatedGestureHandler({
    onStart: () => {
      runOnJS(functrionDispatch)(false);
    },
  });
  const {linerGradient} = Color.authColorObject.mainComponent;
  return (
    <ImageBackground style={styles.viewContainer} source={image}>
      <LinearGradient
        colors={
          themeState.theme == light ? linerGradient.light : linerGradient.dark
        }>
        <SafeAreaView style={styles.viewStyle}>
          <View>
            <TextAuthComponent />
          </View>
          <KeyboardCheck>
            <KeyboardAwareScrollView
              extraHeight={150}
              extraScrollHeight={30}
              enableOnAndroid={true}
              scrollEnabled={keyboardStatusState.keyboardStatus}>
              <LoginForm />
            </KeyboardAwareScrollView>
          </KeyboardCheck>
          <PanGestureHandler onGestureEvent={gesture}>
            <Animated.View
              style={[
                {
                  height: HEIGHT_APP * 0.25,
                  width: '100%',
                  position: 'absolute',
                  bottom: 20,
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
});
