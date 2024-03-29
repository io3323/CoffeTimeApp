import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {light} from '../../../../themeNameApp';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../../Color';

export const AuthButtonNotActive = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const authDataUserState = useSelector(
    (state: RootState) => state.authDataUserState,
  );
  const indicatorButtonState = useSelector(
    (state: RootState) => state.indicatorButtonState,
  );
  const {t} = useTranslation();
  return (
    <View style={styles.mainContainer}>
      {((authDataUserState.login === '' &&
        authDataUserState.password === '' &&
        !indicatorButtonState.active) ||
        (authDataUserState.login !== '' &&
          authDataUserState.password === '' &&
          !indicatorButtonState.active) ||
        (authDataUserState.login === '' &&
          authDataUserState.password !== '' &&
          !indicatorButtonState.active)) && (
        <View
          style={[
            styles.buttonLoginNotEctive,
            themeState.theme == light ? styles.colorLight : styles.colorDark,
          ]}>
          <Text style={styles.buttonTextLogin}>
            {t('common:authScreen:button')}
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
    backgroundColor: Color.authColorObject.buttonNA.backgroundColor,
    borderColor: Color.authColorObject.buttonNA.backgroundColor,
  },
  colorDark: {
    backgroundColor: Color.authColorObject.buttonNA.backgroundColor,
    borderColor: Color.authColorObject.buttonNA.backgroundColor,
  },
  buttonTextLogin: {
    fontSize: 18,
    fontFamily: 'SFUIText-Regular',
    color: Color.authColorObject.buttonNA.textColor,
    textAlign: 'center',
    marginTop: 14,
  },
});
