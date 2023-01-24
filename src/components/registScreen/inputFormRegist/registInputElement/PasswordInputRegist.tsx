import {StyleSheet, TextInput, View} from 'react-native';
import {ru} from '../../../../localisationLanguageName';
import {
  placehjlderRegistPasswordENG,
  placehjlderRegistPasswordRU,
} from '../../../../localisationScreen/RegistScreenLocal';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {addUserPasswordProfile} from '../../../../redux/reduxStateSlice/userInfoSlice';
import {light} from '../../../../themeNameApp';
import {inputRegistColorObject} from './colorRegistObject/inputRegistColorObject';

export const PasswordInputRegist = () => {
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const dispatch = useDispatch();
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  const securePasswordState = useSelector(
    (state: RootState) => state.securePasswordState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.inputConteiner}>
      <TextInput
        placeholder={
          localisationState.local == ru
            ? placehjlderRegistPasswordRU
            : placehjlderRegistPasswordENG
        }
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
