import {
  ImageBackground,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imaga from '../../assets/image/authScreen/fon.png';
import RegisterForm from '../../components/authScreen/RegisterForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useEffect, useState} from 'react';
export const RegistScreen = () => {
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
    <ImageBackground style={styles.viewContainer} source={imaga}>
      <LinearGradient colors={['rgba(0,0,0,0.00)', 'rgba(243,233,216,0.79)']}>
        <View style={styles.viewStyle}>
          <SafeAreaView>
            <Text style={styles.mainText}>CoffeTime</Text>
            <Text style={styles.additinalText}>территория кофе</Text>
            <KeyboardAwareScrollView
              extraHeight={150}
              extraScrollHeight={125}
              enableOnAndroid={true}
              scrollEnabled={keyboardStatus}
              style={styles.keyboardConteiner}>
              <RegisterForm />
            </KeyboardAwareScrollView>
          </SafeAreaView>
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
    marginTop: 50,
    marginLeft: 70,
    marginRight: 13,
  },
  additinalText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Helvetica',
    marginLeft: 159,
    marginRight: 83,
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
    height: '70%',
  },
});
