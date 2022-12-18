import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ILogin, useAddLoginMutation} from '../../redux/reduToolKitQuery';
import {useDispatch} from 'react-redux';
import {addToken} from '../../redux/reduxStateSlice/tokenSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  NameTabStack,
  RegistScreenName,
} from '../../navigation/navigator/nameScreen';
import pencilIcon from '../../assets/image/authScreen/pencilIcon.png';
import removeIcon from '../../assets/image/authScreen/removeIcon.png';
const LoginForm = () => {
  const [addLogin] = useAddLoginMutation();
  const [loginUser, setLogin] = useState('');
  const [passwordUser, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
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
        const resultMas = Object.values(result);
        resultMas.forEach(userToken => {
          dispatch(addToken(userToken));
        });

        navigation.navigate(NameTabStack);
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
    navigation.navigate(RegistScreenName);
  };
  return (
    <View style={{height: 230, flex: 1}}>
      <View>
        <TextInput
          placeholder={'Login'}
          style={styles.input}
          autoCapitalize={'none'}
          value={loginUser}
          onChangeText={text => {
            setLogin(text);
          }}
        />
        {loginUser == '' && <Image source={pencilIcon} style={styles.icon} />}
        {loginUser != '' && (
          <TouchableOpacity
            style={styles.removeIcon}
            onPress={() => setLogin('')}>
            <Image source={removeIcon} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <TextInput
          placeholder={'Password'}
          style={styles.input}
          autoCapitalize={'none'}
          value={passwordUser}
          onChangeText={text => setPassword(text)}
        />
        {passwordUser == '' && (
          <Image source={pencilIcon} style={styles.icon} />
        )}
        {passwordUser != '' && (
          <TouchableOpacity
            style={styles.removeIcon}
            onPress={() => setPassword('')}>
            <Image source={removeIcon} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.buttonConteiner]}>
        {loginUser !== '' && passwordUser !== '' && (
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => {
              handleLoginScreen();
            }}>
            <Text style={styles.buttonTextLogin}>войти</Text>
          </TouchableOpacity>
        )}
        {((loginUser === '' && passwordUser === '') ||
          (loginUser !== '' && passwordUser === '') ||
          (loginUser === '' && passwordUser !== '')) && (
          <View style={styles.buttonLoginNotEctive}>
            <Text style={styles.buttonTextLogin}>войти</Text>
          </View>
        )}
      </View>
      <View style={styles.registConteiner}>
        <TouchableOpacity onPress={() => handleRegistScreen()}>
          <Text style={styles.buttonRegistText}>
            Dont have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
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
    color: '#474747',
  },
  buttonLogin: {
    borderStyle: 'solid',
    borderRadius: 40,
    backgroundColor: '#C8D9AF',
    borderColor: '#C8D9AF',
    borderWidth: 1,
    width: '80%',
    height: 52,
  },
  buttonLoginNotEctive: {
    borderStyle: 'solid',
    borderRadius: 40,
    backgroundColor: '#bdbbbb',
    borderColor: '#BDBBBBFF',
    borderWidth: 1,
    width: 300,
    height: 52,
  },
  buttonTextLogin: {
    fontSize: 18,
    fontFamily: 'SFUIText-Regular',
    color: 'white',
    textAlign: 'center',
    marginTop: 14,
  },
  buttonRegistText: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'SFUIText-Regular',
    marginTop: 5,
  },
  buttonConteiner: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registConteiner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    marginTop: 22,
    right: '5%',
  },
  removeIcon: {
    position: 'absolute',
    right: '5%',
    marginTop: 22,
  },
});
