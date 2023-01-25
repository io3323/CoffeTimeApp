import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {addUserEmailProfile} from '../../../../redux/reduxStateSlice/userInfoSlice';
import {inputRegistColorObject} from './colorRegistObject/inputRegistColorObject';
import {light} from '../../../../themeNameApp';
import {useTranslation} from 'react-i18next';

export const EmailInputRegist = () => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  const dispatch = useDispatch();
  let textPlaceholder = t('common:registScreen:emailInput');
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
        onChangeText={text => dispatch(addUserEmailProfile({userEmail: text}))}
        value={userInfoState.userInfo!.userEmail}
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
