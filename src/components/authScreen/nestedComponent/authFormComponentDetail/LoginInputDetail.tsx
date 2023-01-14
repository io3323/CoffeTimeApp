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

export const LoginInputDetail = () => {
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const authDataUserState = useSelector(
    (state: RootState) => state.authDataUserState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  const dispatch = useDispatch();
  return (
    <View style={styles.inputConteiner}>
      <TextInput
        placeholder={
          localisationState.local == ru
            ? placeholderAuthLoginRu
            : placeholderAuthLoginENG
        }
        cursorColor={'#FFFFFFB5'}
        placeholderTextColor={'#FFFFFFB5'}
        style={styles.input}
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
      <View style={styles.line} />
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
});
