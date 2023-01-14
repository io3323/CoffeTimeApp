import {StyleSheet, Text, View} from 'react-native';
import {ru} from '../../../../localisationLanguageName';
import {
  buttonAuthTitleENG,
  buttonAuthTitleRU,
} from '../../../../localisationScreen/AuthScreenLocal';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {light} from '../../../../themeNameApp';

export const AuthButtonNotActive = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const authDataUserState = useSelector(
    (state: RootState) => state.authDataUserState,
  );
  const indicatorButtonState = useSelector(
    (state: RootState) => state.indicatorButtonState,
  );
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  return (
    <View style={styles.mainContainer}>
      {((authDataUserState.login === '' &&
        authDataUserState.password === '' &&
        indicatorButtonState.active === false) ||
        (authDataUserState.login !== '' &&
          authDataUserState.password === '' &&
          indicatorButtonState.active === false) ||
        (authDataUserState.login === '' &&
          authDataUserState.password !== '' &&
          indicatorButtonState.active === false)) && (
        <View
          style={[
            styles.buttonLoginNotEctive,
            themeState.theme == light ? styles.colorLight : styles.colorDark,
          ]}>
          <Text style={styles.buttonTextLogin}>
            {localisationState.local == ru
              ? buttonAuthTitleRU
              : buttonAuthTitleENG}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {width: '100%', alignItems: 'center'},
  buttonLoginNotEctive: {
    borderStyle: 'solid',
    borderRadius: 40,
    borderWidth: 1,
    width: '80%',
    height: 52,
  },
  colorLight: {
    backgroundColor: '#bdbbbb',
    borderColor: '#BDBBBBFF',
  },
  colorDark: {
    backgroundColor: '#bdbbbb',
    borderColor: '#BDBBBBFF',
  },
  buttonTextLogin: {
    fontSize: 18,
    fontFamily: 'SFUIText-Regular',
    color: 'white',
    textAlign: 'center',
    marginTop: 14,
  },
});
