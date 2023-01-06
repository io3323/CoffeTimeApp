import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {RootState, useAddLoginMutation} from '../../redux/reduToolKitQuery';
import {useDispatch, useSelector} from 'react-redux';
import {addToken} from '../../redux/reduxStateSlice/tokenSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  LoaderScreenName,
  RegistScreenName,
} from '../../navigation/navigator/nameScreen';
import pencilIcon from '../../assets/image/regImageScreen/pencilIcon.png';
import removeIcon from '../../assets/image/authScreen/removeIcon.png';
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
import {
  checkFunction,
  ERORNet,
  GOODRes,
  MistakeUser,
} from '../../externalFunctions/externalFunction';
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
    });
    dispatch(addToken(result));
    saveData();
    const checkResult = checkFunction(result);
    if (checkResult === GOODRes) {
      navigation.navigate(LoaderScreenName);
    } else if (checkResult === MistakeUser) {
      Alert.alert(
        localisationState.local == ru ? userDataAuthRU : userDataAuthENG,
      );
    } else if (checkResult === ERORNet) {
      Alert.alert(
        localisationState.local == ru ? networkStatusRU : networkStatusENG,
      );
    }
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
          scrollEnabled={false}
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
          scrollEnabled={false}
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
    fontSize: 18,
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
