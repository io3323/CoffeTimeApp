import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {changeButtonIndicatorState} from '../../../../redux/reduxStateSlice/indicatorButtonSlice';
import {addToken} from '../../../../redux/reduxStateSlice/tokenSlice';
import {
  checkFunction,
  ERORNet,
  GOODRes,
  MistakeUser,
} from '../../../../externalFunctions/authScreen/checkFunction';
import {LoaderScreenName} from '../../../../navigation/navigator/nameScreen';
import {
  addUserNameProfile,
  addUserPasswordProfile,
} from '../../../../redux/reduxStateSlice/userInfoSlice';
import {useAddLoginMutation} from '../../../../redux/reduToolKitQuery';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {light} from '../../../../themeNameApp';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
export const AuthButtonActive = () => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  const authDataUserState = useSelector(
    (state: RootState) => state.authDataUserState,
  );
  const indicatorButtonState = useSelector(
    (state: RootState) => state.indicatorButtonState,
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
      Alert.alert(t('common:authScreen:dataError'));
    } else if (checkResult === ERORNet) {
      dispatch(changeButtonIndicatorState({active: false}));
      Alert.alert(t('common:authScreen:networkError'));
    }
  };
  const dispatch = useDispatch();
  const saveData = () => {
    dispatch(addUserNameProfile({userName: authDataUserState.login}));
    dispatch(
      addUserPasswordProfile({userPassword: authDataUserState.password}),
    );
  };
  const progress = useDerivedValue(() =>
    themeState.theme == light ? withTiming(0) : withTiming(1),
  );
  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#C8D9AF', '#bbb8ee'],
    );
    return {
      backgroundColor: backgroundColor,
      borderColor: backgroundColor,
    };
  });
  return (
    <Animated.View style={[styles.mainContainer]}>
      {authDataUserState.login !== '' &&
        authDataUserState.password !== '' &&
        !indicatorButtonState.active && (
          <Animated.View style={[styles.buttonLogin, rStyle]}>
            <TouchableOpacity
              onPress={() => {
                handleLoginScreen();
              }}>
              <Text style={styles.buttonTextLogin}>
                {t('common:authScreen:button')}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
    </Animated.View>
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
