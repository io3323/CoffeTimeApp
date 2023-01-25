import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {addUserPasswordProfile} from '../../../../redux/reduxStateSlice/userInfoSlice';
import {light} from '../../../../themeNameApp';
import {inputRegistColorObject} from './colorRegistObject/inputRegistColorObject';
import {useTranslation} from 'react-i18next';

export const PasswordInputRegist = () => {
  const {t} = useTranslation();
  let textPlaceholder = t('common:registScreen:passwordInput');
  const dispatch = useDispatch();
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  const securePasswordState = useSelector(
    (state: RootState) => state.securePasswordState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.inputConteiner}>
      <TextInput
        placeholder={textPlaceholder}
        placeholderTextColor={
          themeState.theme == light
            ? inputRegistColorObject.placeholderColorLight
            : inputRegistColorObject.placeholderColorDark
        }
        cursorColor={
          themeState.theme == light
            ? inputRegistColorObject.cursorColorLight
            : inputRegistColorObject.cursorColorDark
        }
        style={styles.input}
        onChangeText={text =>
          dispatch(addUserPasswordProfile({userPassword: text}))
        }
        secureTextEntry={securePasswordState.secureState}
        value={userInfoState.userInfo!.userPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputConteiner: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    color: '#FFFFFFB5',
    marginLeft: '-10%',
  },
});
