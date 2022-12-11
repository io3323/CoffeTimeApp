import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// @ts-ignore
import imaga from '../../assets/image/authScreen/fon.png';
import RegisterForm from '../../components/authScreen/RegisterForm';
// @ts-ignore
import backIcon from '../../assets/image/regImageScreen/backIcon.png';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenName} from './AuthScreen';

export const RegistScreenName = 'Regist Screen';
export const RegistScreen = () => {
  const navigation = useNavigation();
  const backScreen = () => {
    // @ts-ignore
    navigation.navigate(AuthScreenName);
  };
  return (
    <ImageBackground style={styles.viewContainer} source={imaga}>
      <LinearGradient colors={['rgba(0,0,0,0.00)', 'rgba(243,233,216,0.79)']}>
        <View style={styles.viewStyle}>
          <SafeAreaView>
            <TouchableOpacity onPress={() => backScreen()}>
              <Image source={backIcon} style={styles.backIconStyle} />
            </TouchableOpacity>
            <Text style={styles.mainText}>CoffeTime</Text>
            <Text style={styles.additinalText}>территория кофе</Text>
            <RegisterForm />
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
  backIconStyle: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});
