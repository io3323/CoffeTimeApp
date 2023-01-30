import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {light} from '../../../../themeNameApp';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';

export const ButtonOrderComponent = () => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={
          themeState.theme == light ? styles.buttonLight : styles.buttonDark
        }>
        <Text style={styles.textButton}>{t('common:orderScreen:button')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLight: {
    width: 207,
    height: 41,
    backgroundColor: '#C8D9AF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  buttonDark: {
    width: 207,
    height: 41,
    backgroundColor: '#bbb8ee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'SFUIText-Light',
    color: '#FFFFFF',
  },
});
