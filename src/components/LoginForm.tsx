import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RegistScreenName} from '../navigation/screens/RegistScreen';
import {SecondScreenName} from '../navigation/screens/SecondScreen';
const LoginForm = () => {
  const navigation = useNavigation();
  const handleLoginScreen = () => {
    // @ts-ignore
    navigation.navigate(SecondScreenName);
  };
  const handleRegistScreen = () => {
    // @ts-ignore
    navigation.navigate(RegistScreenName);
  };
  return (
    <View style={styles.container}>
      <TextInput placeholder={'Login'} style={styles.input} />
      <TextInput placeholder={'Password'} style={styles.input} />
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => handleLoginScreen()}>
        <Text style={styles.buttonTextLogin}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleRegistScreen()}>
        <Text style={styles.buttonRegistText}>
          Dont have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginForm;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  buttonLogin: {
    marginTop: 10,
    borderStyle: 'solid',
    borderRadius: 40,
    backgroundColor: '#C8D9AF',
    borderColor: '#C8D9AF',
    borderWidth: 1,
    width: 300,
    height: 52,
    marginLeft: 38,
  },
  buttonTextLogin: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },
  container: {
    marginTop: 100,
  },
  buttonRegistText: {
    fontSize: 14,
    marginTop: 20,
    marginLeft: 85,
    color: '#ffffff',
  },
});
