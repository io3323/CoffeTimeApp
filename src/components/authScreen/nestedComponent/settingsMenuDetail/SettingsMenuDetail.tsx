import {StyleSheet, View} from 'react-native';
import {SettingsThemeSwitch} from './SettingsThemeSwitch';
import {SettingsLanguageSwitch} from './SettingsLanguageSwitch';

export const SettingsMenuDetail = () => {
  return (
    <View style={styles.mainContainer}>
      <SettingsThemeSwitch />
      <View style={styles.separatorStyle} />
      <SettingsLanguageSwitch />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f3e9d8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorStyle: {
    marginTop: 10,
  },
});
