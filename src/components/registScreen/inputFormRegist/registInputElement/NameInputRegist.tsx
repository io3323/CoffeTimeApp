import {StyleSheet, TextInput, View} from 'react-native';
import {ru} from '../../../../localisationLanguageName';
import {
  placehjlderRegistNameENG,
  placehjlderRegistNameRU,
} from '../../../../localisationScreen/RegistScreenLocal';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {addUserNameProfile} from '../../../../redux/reduxStateSlice/userInfoSlice';
import {light} from '../../../../themeNameApp';
import {inputRegistColorObject} from './colorRegistObject/inputRegistColorObject';

export const NameInputRegist = () => {
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  const dispatch = useDispatch();
  return (
    <View style={styles.inputConteiner}>
      <TextInput
        placeholder={
          localisationState.local == ru
            ? placehjlderRegistNameRU
            : placehjlderRegistNameENG
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
        onChangeText={text => dispatch(addUserNameProfile({userName: text}))}
        value={userInfoState.userInfo!.userName}
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
