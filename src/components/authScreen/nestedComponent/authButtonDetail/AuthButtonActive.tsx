import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ru} from '../../../../localisationLanguageName';
import {
  buttonAuthTitleENG,
  buttonAuthTitleRU,
  networkStatusENG,
  networkStatusRU,
  userDataAuthENG,
  userDataAuthRU,
} from '../../../../localisationScreen/AuthScreenLocal';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {changeButtonIndicatorState} from '../../../../redux/reduxStateSlice/indicatorButtonSlice';
import {addToken} from '../../../../redux/reduxStateSlice/tokenSlice';
import {
  checkFunction,
  ERORNet,
  GOODRes,
  MistakeUser,
} from '../../../../externalFunctions/checkFunction';
import {LoaderScreenName} from '../../../../navigation/navigator/nameScreen';
import {createUserProfile} from '../../../../redux/reduxStateSlice/userInfoSlice';
import {useAddLoginMutation} from '../../../../redux/reduToolKitQuery';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {light} from '../../../../themeNameApp';
export const AuthButtonActive = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const authDataUserState = useSelector(
    (state: RootState) => state.authDataUserState,
  );
  const indicatorButtonState = useSelector(
    (state: RootState) => state.indicatorButtonState,
  );
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const [addLogin] = useAddLoginMutation();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const handleLoginScreen = async () => {
    dispatch(changeButtonIndicatorState({active: true}));
    const result = await addLogin({
      email: authDataUserState.login!,
      password: authDataUserState.password!,
    });
    dispatch(addToken(result));
    saveData();
    const checkResult = checkFunction(result);
    if (checkResult === GOODRes) {
      navigation.navigate(LoaderScreenName);
    } else if (checkResult === MistakeUser) {
      dispatch(changeButtonIndicatorState({active: false}));
      Alert.alert(
        localisationState.local == ru ? userDataAuthRU : userDataAuthENG,
      );
    } else if (checkResult === ERORNet) {
      dispatch(changeButtonIndicatorState({active: false}));
      Alert.alert(
        localisationState.local == ru ? networkStatusRU : networkStatusENG,
      );
    }
  };
  const dispatch = useDispatch();
  const saveData = () => {
    dispatch(
      createUserProfile({
        userName: authDataUserState.login!,
        userEmail: '',
        userPassword: authDataUserState.password!,
        userImage: '',
      }),
    );
  };
  return (
    <View style={styles.mainContainer}>
      {authDataUserState.login !== '' &&
        authDataUserState.password !== '' &&
        indicatorButtonState.active === false && (
          <TouchableOpacity
            style={[
              styles.buttonLogin,
              themeState.theme == light ? styles.colorLight : styles.colorDark,
            ]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {width: '100%', alignItems: 'center'},
  buttonLogin: {
    borderStyle: 'solid',
    borderRadius: 40,
    borderWidth: 1,
    width: '80%',
    height: 52,
  },
  colorLight: {
    backgroundColor: '#C8D9AF',
    borderColor: '#C8D9AF',
  },
  colorDark: {
    backgroundColor: '#bbb8ee',
    borderColor: '#bbb8ee',
  },
  buttonTextLogin: {
    fontSize: 18,
    fontFamily: 'SFUIText-Regular',
    color: 'white',
    textAlign: 'center',
    marginTop: 14,
  },
});
