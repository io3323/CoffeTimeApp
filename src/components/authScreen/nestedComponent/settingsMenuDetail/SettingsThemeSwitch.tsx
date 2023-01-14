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

export const SettingsThemeSwitch = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const dispatch = useDispatch();
  const toggleSwitchTheme = () => {
    dispatch(changeControllerTheme());
    themeState.themeController
      ? dispatch(changeTheme({theme: light}))
      : dispatch(changeTheme({theme: dark}));
  };
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
        backgroundActive={'#6c6c6c'}
        backgroundInactive={'#6C6C6CFF'}
        circleActiveColor={'#232638'}
        circleInActiveColor={'#eec060'}
      />
    </View>
  );
};
