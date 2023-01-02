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
import {RootState, useAddLoginMutation} from '../../redux/reduToolKitQuery';
import {useDispatch, useSelector} from 'react-redux';
import {addToken} from '../../redux/reduxStateSlice/tokenSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  NameTabStack,
  RegistScreenName,
} from '../../navigation/navigator/nameScreen';
import pencilIcon from '../../assets/image/regImageScreen/pencilIcon.png';
import removeIcon from '../../assets/image/authScreen/removeIcon.png';
import {ILogin} from '../../redux/reduToolKitQuery/interfacesCoffeData';
import {createUserProfile} from '../../redux/reduxStateSlice/userInfoSlice';
import {ru} from '../../localisationLanguageName';
import {
  buttonAuthTitleENG,
  buttonAuthTitleRU,
  buttonRegistTitleENG,
  buttonRegistTitleRu,
  networkStatusENG,
  networkStatusRU,
  placeholderAuthLoginENG,
  placeholderAuthLoginRu,
  placeholderAuthPasswordENG,
  placeholderAuthPasswordRu,
  userDataAuthENG,
  userDataAuthRU,
} from '../../localisationScreen/AuthScreenLocal';
const LoginForm = () => {
  const [addLogin] = useAddLoginMutation();
  const [loginUser, setLogin] = useState('');
  const [passwordUser, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
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
            Alert.alert(
              localisationState.local == ru
                ? networkStatusRU
                : networkStatusENG,
            );
          } else {
            Alert.alert(
              localisationState.local == ru ? userDataAuthRU : userDataAuthENG,
            );
          }
        });
      }
    });
    saveData();
  };
  const saveData = () => {
    dispatch(
      createUserProfile({
        userName: loginUser,
        userEmail: '',
        userPassword: passwordUser,
        userImage: '',
      }),
    );
  };
  const handleRegistScreen = () => {
    navigation.navigate(RegistScreenName);
  };
  return (
    <View style={{height: 230, flex: 1}}>
      <View style={styles.inputConteiner}>
        <TextInput
          placeholder={
            localisationState.local == ru
              ? placeholderAuthLoginRu
              : placeholderAuthLoginENG
          }
          cursorColor={'#FFFFFFB5'}
          placeholderTextColor={'#FFFFFFB5'}
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
        <View style={styles.line} />
      </View>

      <View style={styles.inputConteiner}>
        <TextInput
          placeholder={
            localisationState.local == ru
              ? placeholderAuthPasswordRu
              : placeholderAuthPasswordENG
          }
          cursorColor={'#FFFFFFB5'}
          placeholderTextColor={'#FFFFFFB5'}
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
        <View style={styles.line} />
      </View>

      <View style={[styles.buttonConteiner]}>
        {loginUser !== '' && passwordUser !== '' && (
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => {
              handleLoginScreen();
            }}>
            <Text style={styles.buttonTextLogin}>
              {localisationState.local == ru
                ? buttonAuthTitleRU
                : buttonAuthTitleENG}
            </Text>
          </TouchableOpacity>
        )}
        {((loginUser === '' && passwordUser === '') ||
          (loginUser !== '' && passwordUser === '') ||
          (loginUser === '' && passwordUser !== '')) && (
          <View style={styles.buttonLoginNotEctive}>
            <Text style={styles.buttonTextLogin}>
              {localisationState.local == ru
                ? buttonAuthTitleRU
                : buttonAuthTitleENG}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.registConteiner}>
        <TouchableOpacity onPress={() => handleRegistScreen()}>
          <Text style={styles.buttonRegistText}>
            {localisationState.local == ru
              ? buttonRegistTitleRu
              : buttonRegistTitleENG}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginForm;
const styles = StyleSheet.create({
  inputConteiner: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '70%',
    margin: 12,
    color: '#FFFFFFB5',
    fontSize: 20,
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
    marginTop: '5%',
  },
  registConteiner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    position: 'absolute',
    marginTop: 10,
    right: '13%',
  },
  removeIcon: {
    position: 'absolute',
    right: '15%',
    marginTop: 22,
  },
  line: {
    width: '75%',
    height: 1,
    marginTop: -5,
    backgroundColor: '#D8D8D8',
  },
});
