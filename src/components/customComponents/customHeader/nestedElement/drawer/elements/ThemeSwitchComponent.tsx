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
import {Color} from '../../../../../../Color';

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
  const {
    backgroundInactive,
    backgroundActive,
    circleActiveColor,
    circleInActiveColor,
  } = Color.drawerColorObject.themeSwitch;
  return (
    <View style={styles.switchMainContainer}>
      <View style={styles.textSwitchContainer}>
        <Text style={styles.textSwitch}>{t('common:drawerScreen:theme')}</Text>
      </View>
      <View style={styles.switchContainer}>
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
          backgroundActive={backgroundActive}
          backgroundInactive={backgroundInactive}
          circleActiveColor={circleActiveColor}
          circleInActiveColor={circleInActiveColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchMainContainer: {
    width: '100%',
    marginTop: '5%',
    flexDirection: 'row',
  },
  switchContainer: {
    flex: 2,
    alignItems: 'center',
  },
  textSwitchContainer: {
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
