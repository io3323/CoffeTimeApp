import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useEffect, useState} from 'react';
import newUserIcon from '../../assets/image/stateImageReg/newUser.png';
import pencilIcon from '../../assets/image/regImageScreen/pencilIcon.png';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {LoaderScreenName} from '../../navigation/navigator/nameScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import removeIcon from '../../assets/image/authScreen/removeIcon.png';
import {useDispatch, useSelector} from 'react-redux';
import {createUserProfile} from '../../redux/reduxStateSlice/userInfoSlice';
import {addToken} from '../../redux/reduxStateSlice/tokenSlice';
import {RootState, useAddLoginMutation} from '../../redux/reduToolKitQuery';
import {ru} from '../../localisationLanguageName';
import {
  buttonRegistENG,
  buttonRegistRU,
  placehjlderRegistEmailENG,
  placehjlderRegistEmailRU,
  placehjlderRegistNameENG,
  placehjlderRegistNameRU,
  placehjlderRegistPasswordENG,
  placehjlderRegistPasswordRU,
} from '../../localisationScreen/RegistScreenLocal';
import {
  checkFunction,
  ERORNet,
  GOODRes,
  MistakeUser,
} from '../../externalFunctions/externalFunction';
import {
  networkStatusENG,
  networkStatusRU,
  userDataAuthENG,
  userDataAuthRU,
} from '../../localisationScreen/AuthScreenLocal';
import openEye from '../../assets/image/authScreen/openEye.png';
import closeEye from '../../assets/image/authScreen/closeEye.png';
type writeIconModel = {
  name: boolean;
  email: boolean;
  password: boolean;
};
type userInfoModel = {
  name: string;
  email: string;
  password: string;
};
const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [userInfo, setUserInfo] = useState<userInfoModel>({
    name: '',
    email: '',
    password: '',
  });
  const [controller, setController] = useState(true);
  const [controllerButton, setControllerButton] = useState(true);
  const [photo, setPhoto] = useState<string | undefined>('');
  const [writeIconController, setWriteIconController] =
    useState<writeIconModel>({
      name: false,
      email: false,
      password: false,
    });
  const [addLogin] = useAddLoginMutation();
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const [securePassword, setSecurePassword] = useState(true);
  const handleLoginScreen = async () => {
    const result = await addLogin({
      email: 'string',
      password: 'string',
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
  const handleTransitionMainScreen = () => {
    saveData();
    handleLoginScreen();
  };
  const openCamera = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      response.assets?.map(photoLib => {
        setPhoto(photoLib.uri);
        setController(false);
      });
    });
  };
  const saveData = () => {
    dispatch(
      createUserProfile({
        userName: userInfo.name,
        userEmail: userInfo.email,
        userPassword: userInfo.password,
        userImage: photo,
      }),
    );
  };
  useEffect(() => {
    if (
      (userInfo.name === '' &&
        userInfo.email === '' &&
        userInfo.password === '') ||
      (userInfo.name !== '' &&
        userInfo.email === '' &&
        userInfo.password === '') ||
      (userInfo.name === '' &&
        userInfo.email !== '' &&
        userInfo.password === '') ||
      (userInfo.name === '' &&
        userInfo.email === '' &&
        userInfo.password !== '') ||
      (userInfo.name !== '' &&
        userInfo.email !== '' &&
        userInfo.password === '') ||
      (userInfo.name !== '' &&
        userInfo.email === '' &&
        userInfo.password !== '') ||
      (userInfo.name === '' &&
        userInfo.email !== '' &&
        userInfo.password !== '')
    ) {
      setControllerButton(false);
    } else {
      setControllerButton(true);
    }
  }, [userInfo.name, userInfo.email, userInfo.password]);
  useEffect(() => {
    if (userInfo.name !== '') {
      setWriteIconController(prevState => ({...prevState, name: false}));
    } else {
      setWriteIconController(prevState => ({...prevState, name: true}));
    }
    if (userInfo.email !== '') {
      setWriteIconController(prevState => ({...prevState, email: false}));
    } else {
      setWriteIconController(prevState => ({...prevState, email: true}));
    }
    if (userInfo.password !== '') {
      setWriteIconController(prevState => ({...prevState, password: false}));
    } else {
      setWriteIconController(prevState => ({...prevState, password: true}));
    }
  }, [userInfo.email, userInfo.name, userInfo.password]);
  return (
    <View style={styles.mainConteiner}>
      <TouchableOpacity style={styles.container} onPress={() => openCamera()}>
        <View style={styles.secondContainer}>
          <View style={styles.roundFirst}>
            <View style={styles.roundSecond}>
              {controller && (
                <Image source={newUserIcon} style={styles.initialImage} />
              )}
              {photo !== '' && (
                <Image source={{uri: photo}} style={styles.userImage} />
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.mainInputConteiner}>
        <View style={styles.inputConteiner}>
          <TextInput
            placeholder={
              localisationState.local == ru
                ? placehjlderRegistNameRU
                : placehjlderRegistNameENG
            }
            placeholderTextColor={'#FFFFFFB5'}
            cursorColor={'#FFFFFFB5'}
            style={styles.input}
            onChangeText={text =>
              setUserInfo(prevState => ({...prevState, name: text}))
            }
            value={userInfo.name}
          />
        </View>
        {writeIconController.name && (
          <View>
            <Image style={styles.pencilIcon} source={pencilIcon} />
          </View>
        )}
        {writeIconController.name == false && (
          <TouchableOpacity
            onPress={() =>
              setUserInfo(prevState => ({...prevState, name: ''}))
            }>
            <Image style={styles.removeIcon} source={removeIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.line} />
      <View style={styles.mainInputConteiner}>
        <View style={styles.inputConteiner}>
          <TextInput
            placeholder={
              localisationState.local == ru
                ? placehjlderRegistEmailRU
                : placehjlderRegistEmailENG
            }
            placeholderTextColor={'#FFFFFFB5'}
            cursorColor={'#FFFFFFB5'}
            style={styles.input}
            onChangeText={text =>
              setUserInfo(prevState => ({...prevState, email: text}))
            }
            value={userInfo.email}
          />
        </View>
        {writeIconController.email && (
          <View>
            <Image style={styles.pencilIcon} source={pencilIcon} />
          </View>
        )}
        {writeIconController.email == false && (
          <TouchableOpacity
            onPress={() =>
              setUserInfo(prevState => ({...prevState, email: ''}))
            }>
            <Image style={styles.removeIcon} source={removeIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.line} />
      <View style={styles.mainInputConteiner}>
        <View style={styles.inputConteiner}>
          <TextInput
            placeholder={
              localisationState.local == ru
                ? placehjlderRegistPasswordRU
                : placehjlderRegistPasswordENG
            }
            placeholderTextColor={'#FFFFFFB5'}
            cursorColor={'#FFFFFFB5'}
            style={styles.input}
            onChangeText={text =>
              setUserInfo(prevState => ({...prevState, password: text}))
            }
            secureTextEntry={securePassword}
            value={userInfo.password}
          />
        </View>
        {securePassword == false && (
          <TouchableOpacity
            style={styles.eyeConeiner}
            onPress={() => setSecurePassword(prevState => !prevState)}>
            <Image source={openEye} style={styles.openEyeIcon} />
          </TouchableOpacity>
        )}
        {securePassword && (
          <TouchableOpacity
            style={styles.eyeConeiner}
            onPress={() => setSecurePassword(prevState => !prevState)}>
            <Image source={closeEye} style={styles.closeEyeIcon} />
          </TouchableOpacity>
        )}
        {writeIconController.password && (
          <View>
            <Image style={styles.pencilIcon} source={pencilIcon} />
          </View>
        )}
        {writeIconController.password == false && (
          <TouchableOpacity
            onPress={() =>
              setUserInfo(prevState => ({...prevState, password: ''}))
            }>
            <Image style={styles.removeIcon} source={removeIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.line} />
      {controllerButton && (
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => handleTransitionMainScreen()}>
          <Text style={styles.buttonTextLogin}>
            {localisationState.local == ru ? buttonRegistRU : buttonRegistENG}
          </Text>
        </TouchableOpacity>
      )}
      {controllerButton == false && (
        <View style={styles.buttonLoginNoActive}>
          <Text style={styles.buttonTextLogin}>
            {localisationState.local == ru ? buttonRegistRU : buttonRegistENG}
          </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainConteiner: {
    alignItems: 'center',
  },
  container: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
    width: 134,
    height: 134,
    marginTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondContainer: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
    width: 128,
    height: 128,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundFirst: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 200,
    width: 134,
    height: 134,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundSecond: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 200,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialImage: {
    width: 90,
    height: 90,
  },
  userImage: {
    width: 114,
    height: 114,
    borderRadius: 100,
  },
  input: {
    fontSize: 20,
    color: '#FFFFFFB5',
    marginLeft: '-10%',
  },
  inputConteiner: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  mainInputConteiner: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },
  line: {
    width: '65%',
    height: 1,
    marginTop: 0,
    backgroundColor: '#D8D8D8',
  },
  pencilIcon: {
    width: 42,
    height: 39,
    marginLeft: '50%',
    position: 'absolute',
  },
  removeIcon: {
    position: 'absolute',
    width: 50,
    height: 25,
    top: '15%',
    marginLeft: '50%',
  },
  buttonLogin: {
    marginTop: 23.5,
    borderStyle: 'solid',
    borderRadius: 40,
    backgroundColor: '#C8D9AF',
    borderColor: '#C8D9AF',
    borderWidth: 1,
    width: 300,
    height: 52,
  },
  buttonLoginNoActive: {
    marginTop: 23.5,
    borderStyle: 'solid',
    borderRadius: 40,
    backgroundColor: '#bdbbbb',
    borderColor: '#bdbbbb',
    borderWidth: 1,
    width: 300,
    height: 52,
  },
  buttonTextLogin: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },
  openEyeIcon: {
    width: 35,
    height: 35,
  },
  closeEyeIcon: {
    width: 35,
    height: 35,
  },
  eyeConeiner: {
    position: 'absolute',
    marginTop: 2,
    right: '0%',
  },
});
export default RegisterForm;
