import {View} from 'react-native';
import {Switch} from 'react-native-switch';
import React from 'react';
import {
  changeControllerTheme,
  changeTheme,
} from '../../../../redux/reduxStateSlice/themeSlice';
import {dark, light} from '../../../../themeNameApp';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {toggleSwitch} from '../../../../redux/reduxStateSlice/switchThemeControllerSlice';
import {Color} from '../../../../Color';
export const SettingsThemeSwitch = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const dispatch = useDispatch();
  const toggleSwitchTheme = () => {
    dispatch(toggleSwitch());
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
  } = Color.authColorObject.settings.settingsMain.themeSwitch;
  return (
    <View>
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
  );
};
