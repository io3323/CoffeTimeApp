import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {addUserPasswordProfile} from '../../../../redux/reduxStateSlice/userInfoSlice';
import {light} from '../../../../themeNameApp';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../../Color';

const {cursorColor, placeholderTextColor, inputColor} =
  Color.regComponent.inputRegComponent;
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
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={textPlaceholder}
        placeholderTextColor={
          themeState.theme == light
            ? placeholderTextColor.light
            : placeholderTextColor.dark
        }
        cursorColor={
          themeState.theme == light ? cursorColor.light : cursorColor.dark
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
  inputContainer: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    color: inputColor,
    marginLeft: '-10%',
  },
});
