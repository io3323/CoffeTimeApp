import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {addUserNameProfile} from '../../../../redux/reduxStateSlice/userInfoSlice';
import {light} from '../../../../themeNameApp';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../../Color';

const {placeholderTextColor, cursorColor, inputColor} =
  Color.regComponent.inputRegComponent;
export const NameInputRegist = () => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  const dispatch = useDispatch();
  let textPlaceholder = t('common:registScreen:nameInput');
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
        onChangeText={text => dispatch(addUserNameProfile({userName: text}))}
        value={userInfoState.userInfo!.userName}
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
