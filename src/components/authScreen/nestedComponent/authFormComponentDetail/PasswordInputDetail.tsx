import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import openEye from '../../../../assets/image/authScreen/openEye.png';
import closeEye from '../../../../assets/image/authScreen/closeEye.png';
import pencilIcon from '../../../../assets/image/regImageScreen/pencilIcon.png';
import removeIcon from '../../../../assets/image/authScreen/removeIcon.png';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {addPasswordUser} from '../../../../redux/reduxStateSlice/authDataUserSlice';
import {light} from '../../../../themeNameApp';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../../Color';

export const PasswordInputDetail = () => {
  const {colorMas, textInputColor, placeholderColor, cursorColor} =
    Color.authColorObject.passwordInput;
  const [securePassword, setSecurePassword] = useState(true);
  const authDataUserState = useSelector(
    (state: RootState) => state.authDataUserState,
  );
  useSelector((state: RootState) => state.localisationState);
  const themeState = useSelector((state: RootState) => state.themeState);
  const progress = useDerivedValue(() =>
    themeState.theme == light
      ? withTiming(0, {duration: 2000})
      : withTiming(1, {duration: 2000}),
  );
  const rStyle = useAnimatedStyle(() => {
    const background = interpolateColor(progress.value, [0, 1], colorMas);
    return {
      backgroundColor: background,
    };
  });
  const dispatch = useDispatch();
  const {t} = useTranslation();
  let passwordPlaceholder = t('common:authScreen:passwordInput');
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={passwordPlaceholder}
        cursorColor={
          themeState.theme == light ? cursorColor.light : cursorColor.dark
        }
        placeholderTextColor={
          themeState.theme == light
            ? placeholderColor.light
            : placeholderColor.dark
        }
        style={[
          styles.input,
          {
            color:
              themeState.theme == light
                ? textInputColor.light
                : textInputColor.dark,
          },
        ]}
        autoCapitalize={'none'}
        value={authDataUserState.password}
        onChangeText={text => dispatch(addPasswordUser({password: text}))}
        scrollEnabled={false}
        secureTextEntry={securePassword}
      />
      {!securePassword && (
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
      {authDataUserState.password == '' && (
        <Image source={pencilIcon} style={styles.icon} />
      )}
      {authDataUserState.password != '' && (
        <TouchableOpacity
          style={styles.removeIcon}
          onPress={() => {
            setSecurePassword(true);
            dispatch(addPasswordUser({password: ''}));
          }}>
          <Image source={removeIcon} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      )}
      <Animated.View style={[styles.line, rStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '70%',
    margin: 12,
    color: '#FFFFFFB5',
    fontSize: 18,
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
    marginTop: 15,
    right: '22%',
  },
});
