import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ru} from '../../../../localisationLanguageName';
import {
  placeholderAuthPasswordENG,
  placeholderAuthPasswordRu,
} from '../../../../localisationScreen/AuthScreenLocal';
import openEye from '../../../../assets/image/authScreen/openEye.png';
import closeEye from '../../../../assets/image/authScreen/closeEye.png';
import pencilIcon from '../../../../assets/image/regImageScreen/pencilIcon.png';
import removeIcon from '../../../../assets/image/authScreen/removeIcon.png';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {addPasswordUser} from '../../../../redux/reduxStateSlice/authDataUserSlice';

export const PasswordInputDetail = () => {
  const [securePassword, setSecurePassword] = useState(true);
  const authDataUserState = useSelector(
    (state: RootState) => state.authDataUserState,
  );
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const dispatch = useDispatch();
  return (
    <View style={styles.inputConteiner}>
      <TextInput
        placeholder={
          localisationState.local == ru
            ? placeholderAuthPasswordRu
            : placeholderAuthPasswordENG
        }
        cursorColor={'#FFFFFFB5'}
        placeholderTextColor={'#FFFFFFB5'}
        style={styles.input}
        autoCapitalize={'none'}
        value={authDataUserState.password}
        onChangeText={text => dispatch(addPasswordUser({password: text}))}
        scrollEnabled={false}
        secureTextEntry={securePassword}
      />
      {securePassword == false && (
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
