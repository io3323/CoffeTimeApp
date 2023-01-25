import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ru} from '../../../../localisationLanguageName';
import {
  placeholderAuthLoginENG,
  placeholderAuthLoginRu,
} from '../../../../localisationScreen/AuthScreenLocal';
import pencilIcon from '../../../../assets/image/regImageScreen/pencilIcon.png';
import removeIcon from '../../../../assets/image/authScreen/removeIcon.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {addLoginUser} from '../../../../redux/reduxStateSlice/authDataUserSlice';
import {light} from '../../../../themeNameApp';
import {formObjectColor} from './formObjectColor';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';

export const LoginInputDetail = () => {
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const authDataUserState = useSelector(
    (state: RootState) => state.authDataUserState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  const progress = useDerivedValue(() =>
    themeState.theme == light
      ? withTiming(0, {duration: 2000})
      : withTiming(1, {duration: 2000}),
  );
  const rStyle = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1],
      [formObjectColor.lineColorLight, formObjectColor.lineColorDark],
    );
    return {
      backgroundColor: background,
    };
  });
  const {t} = useTranslation();
  let playcholderText = t('common:authScreen:loginInput');
  const dispatch = useDispatch();
  return (
    <View style={styles.inputConteiner}>
      <TextInput
        placeholder={playcholderText}
        cursorColor={
          themeState.theme == light
            ? formObjectColor.colorLight
            : formObjectColor.colorDark
        }
        placeholderTextColor={
          themeState.theme == light
            ? formObjectColor.colorLight
            : formObjectColor.colorDark
        }
        style={[
          styles.input,
          {
            color:
              themeState.theme == light
                ? formObjectColor.colorLight
                : formObjectColor.colorDark,
          },
        ]}
        autoCapitalize={'none'}
        value={authDataUserState.login}
        onChangeText={text => {
          dispatch(addLoginUser({login: text}));
        }}
        scrollEnabled={false}
      />
      {authDataUserState.login == '' && (
        <Image source={pencilIcon} style={styles.icon} />
      )}
      {authDataUserState.login != '' && (
        <TouchableOpacity
          style={styles.removeIcon}
          onPress={() => dispatch(addLoginUser({login: ''}))}>
          <Image source={removeIcon} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      )}
      <Animated.View style={[styles.line, rStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputConteiner: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '70%',
    margin: 12,
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
  },
});
