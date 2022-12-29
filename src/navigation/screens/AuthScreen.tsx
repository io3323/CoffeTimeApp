import image from '../../assets/image/authScreen/fon.png';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Keyboard,
  LogBox,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginForm from '../../components/authScreen/LoginForm';
import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SplachComponent} from '../../components/splashScreenComponent/SplashComponent';
import {WIDTH_APP} from '../../definitionSize';
LogBox.ignoreLogs(['Require cycle:']);
export const AuthScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);
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
  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <SplachComponent isAppReady={isAppReady}>
      <ImageBackground style={styles.viewContainer} source={image}>
        <LinearGradient colors={['rgba(0,0,0,0.00)', 'rgba(243,233,216,0.79)']}>
          <View style={styles.viewStyle}>
            <KeyboardAwareScrollView
              extraHeight={150}
              extraScrollHeight={30}
              enableOnAndroid={true}
              scrollEnabled={keyboardStatus}>
              <SafeAreaView>
                <View style={styles.textConteinerMain}>
                  <Text style={styles.mainText} adjustsFontSizeToFit={true}>
                    CoffeTime
                  </Text>
                </View>
                <View style={styles.additinalTextConteiner}>
                  <Text style={styles.additinalText}>территория кофе</Text>
                </View>
                <Provider store={store}>
                  <View style={styles.loginConteiner}>
                    <LoginForm />
                  </View>
                </Provider>
              </SafeAreaView>
            </KeyboardAwareScrollView>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SplachComponent>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '100%',
  },
  textConteinerMain: {
    marginTop: '15.1%',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 64,
    color: '#FFFFFF',
    fontFamily: 'Lobster-Regular',
  },
  additinalTextConteiner: {
    marginTop: -10,
    width: WIDTH_APP * 0.8,
    alignItems: 'flex-end',
  },
  additinalText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'SFUIText-Bold',
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
  loginConteiner: {
    marginTop: '25%',
  },
  keyboardConteiner: {
    flex: 1,
  },
});
