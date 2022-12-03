import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RegistScreenName} from '../../navigation/screens/RegistScreen';
import {useState} from 'react';
import {
  ILogin,
  RootState,
  useAddLoginMutation,
} from '../../redux/reduToolKitQuery';
import {useDispatch, useSelector} from 'react-redux';
import {addToken} from '../../redux/reduxStateSlice/tokenSlice';
const LoginForm = () => {
  const [addLogin] = useAddLoginMutation();
  const [loginUser, setLogin] = useState('');
  const [passwordUser, setPassword] = useState('');
  const navigation = useNavigation();
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const dispatch = useDispatch();
  const handleLoginScreen = async () => {
    const result = await addLogin({
      email: loginUser,
      password: passwordUser,
    } as ILogin);
    console.log(result);
    const keysResult = Object.keys(result);
    keysResult.map(key => {
      if (key === 'data') {
        //console.log('data');
        const resultMas = Object.values(result);
        resultMas.forEach(userToken => {
          dispatch(addToken(userToken));
        });
        // @ts-ignore
        navigation.navigate('TabStack');
      } else {
        const valuesResult = Object.values(result);
        valuesResult.map(values => {
          const keyValues = Object.keys(values);
          const includes = keyValues.includes('error');
          if (includes) {
            Alert.alert('Проверьте соединение с интернетом');
          } else {
            Alert.alert('Неправильный логин или пароль');
          }
        });
      }
    });
  };
  const handleRegistScreen = () => {
    // @ts-ignore
    navigation.navigate(RegistScreenName);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Login'}
        style={styles.input}
        autoCapitalize={'none'}
        onChangeText={text => {
          setLogin(text);
        }}
      />
      <TextInput
        placeholder={'Password'}
        style={styles.input}
        autoCapitalize={'none'}
        onChangeText={text => setPassword(text)}
      />
      {loginUser !== '' && passwordUser !== '' && (
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            handleLoginScreen();
          }}>
          <Text style={styles.buttonTextLogin}>Войти</Text>
        </TouchableOpacity>
      )}
      {((loginUser === '' && passwordUser === '') ||
        (loginUser !== '' && passwordUser === '') ||
        (loginUser === '' && passwordUser !== '')) && (
        <View style={styles.buttonLoginNotEctive}>
          <Text style={styles.buttonTextLogin}>Войти</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => handleRegistScreen()}>
        <Text style={styles.buttonRegistText}>
          Dont have an account? Sign Up
        </Text>
      </TouchableOpacity>
      <Text>Test two</Text>
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
  buttonLoginNotEctive: {
    marginTop: 10,
    borderStyle: 'solid',
    borderRadius: 40,
    backgroundColor: '#bdbbbb',
    borderColor: '#BDBBBBFF',
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
