import {
  Image,
  ImageBackground,
  Keyboard,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imaga from '../../assets/image/authScreen/fon.png';
import RegisterForm from '../../components/authScreen/RegisterForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import backIcon from '../../assets/image/regImageScreen/backIcon.png';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HEIGHT_APP, WIDTH_APP} from '../../definitionSize';
export const RegistScreen = () => {
  console.log(HEIGHT_APP, Platform.OS);
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
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.viewContainer} source={imaga}>
      <LinearGradient colors={['rgba(0,0,0,0.00)', 'rgba(243,233,216,0.79)']}>
        <View style={styles.viewStyle}>
          <SafeAreaView>
            {HEIGHT_APP > 640 && (
              <View>
                <TouchableOpacity
                  style={styles.backIconConteiner}
                  onPress={() => navigation.goBack()}>
                  <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <View style={styles.mainTextConteiner}>
                  <Text style={styles.mainText}>CoffeTime</Text>
                </View>
                <View style={styles.additinalTextConteiner}>
                  <Text style={styles.additinalText}>территория кофе</Text>
                </View>
                <View>
                  <KeyboardAwareScrollView
                    extraHeight={150}
                    extraScrollHeight={125}
                    enableOnAndroid={true}
                    scrollEnabled={keyboardStatus}
                    style={styles.keyboardConteiner}>
                    <RegisterForm />
                  </KeyboardAwareScrollView>
                </View>
              </View>
            )}
            {HEIGHT_APP <= 640 && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                  style={styles.backIconConteiner}
                  onPress={() => navigation.goBack()}>
                  <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <View style={styles.mainTextConteiner}>
                  <Text style={styles.mainText}>CoffeTime</Text>
                </View>
                <View style={styles.additinalTextConteiner}>
                  <Text style={styles.additinalText}>территория кофе</Text>
                </View>
                <View>
                  <KeyboardAwareScrollView
                    extraHeight={150}
                    extraScrollHeight={125}
                    enableOnAndroid={true}
                    scrollEnabled={keyboardStatus}
                    style={styles.keyboardConteiner}>
                    <RegisterForm />
                  </KeyboardAwareScrollView>
                </View>
              </ScrollView>
            )}
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
  mainTextConteiner: {
    marginTop: '5%',
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
    fontFamily: 'Helvetica',
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
    height: '80%',
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  backIconConteiner: {
    marginTop: 5,
    marginLeft: 10,
  },
});
