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
LogBox.ignoreLogs(['Require cycle:']);
export const AuthScreen = () => {
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
  return (
    <ImageBackground style={styles.viewContainer} source={image}>
      <LinearGradient colors={['rgba(0,0,0,0.00)', 'rgba(243,233,216,0.79)']}>
        <View style={styles.viewStyle}>
          <KeyboardAwareScrollView
            extraHeight={150}
            extraScrollHeight={30}
            enableOnAndroid={true}
            scrollEnabled={keyboardStatus}>
            <SafeAreaView>
              <Text style={styles.mainText} adjustsFontSizeToFit={true}>
                CoffeTime
              </Text>
              <Text style={styles.additinalText}>территория кофе</Text>
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
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '100%',
  },
  mainText: {
    fontSize: 64,
    color: '#FFFFFF',
    fontFamily: 'Lobster-Regular',
    marginTop: '15.1%',
    marginLeft: '18.7%',
    marginRight: '18.4%',
  },
  additinalText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'SFUIText-Bold',
    marginLeft: '42.4%',
    marginRight: '20%',
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
