import {StyleSheet, Text, View} from 'react-native';
import {Switch} from 'react-native-switch';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../redux/reduxStore/store';
import {
  changeControllerTheme,
  changeTheme,
} from '../../../../../../redux/reduxStateSlice/themeSlice';
import {dark, light} from '../../../../../../themeNameApp';

export const ThemeSwitchComponent = () => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  const dispatch = useDispatch();
  const toggleSwitchTheme = () => {
    dispatch(changeControllerTheme());
    themeState.themeController
      ? dispatch(changeTheme({theme: light}))
      : dispatch(changeTheme({theme: dark}));
  };
  return (
    <View style={styles.switchMainConteiner}>
      <View style={styles.textSwitchConteiner}>
        <Text style={styles.textSwitch}>{t('common:drawerScreen:theme')}</Text>
      </View>
      <View style={styles.switchConteiner}>
        <Switch
          value={themeState.themeController}
          onValueChange={toggleSwitchTheme}
          disabled={false}
          activeText={'🌑'}
          inActiveText={'🌕️'}
          circleSize={40}
          activeTextStyle={{fontSize: 20}}
          inactiveTextStyle={{fontSize: 20}}
          switchLeftPx={5}
          switchRightPx={5}
          backgroundActive={'#6c6c6c'}
          backgroundInactive={'#6C6C6CFF'}
          circleActiveColor={'#232638'}
          circleInActiveColor={'#eec060'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchMainConteiner: {
    width: '100%',
    marginTop: '5%',
    flexDirection: 'row',
  },
  switchConteiner: {
    flex: 2,
    alignItems: 'center',
  },
  textSwitchConteiner: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSwitch: {
    color: 'white',
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
  },
});
