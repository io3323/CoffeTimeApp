import {View} from 'react-native';
import {Switch} from 'react-native-switch';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {changeLanguageController} from '../../../../redux/reduxStateSlice/localisationSlice';
import {en, ru} from '../../../../localisationLanguageName';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../../Color';
export const SettingsLanguageSwitch = () => {
  const dispatch = useDispatch();
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const {i18n} = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const toggleSwitch = () => {
    dispatch(changeLanguageController());
    localisationState.localController ? changeLanguage(ru) : changeLanguage(en);
  };
  const {backgroundInactive, backgroundActive} =
    Color.authColorObject.settings.settingsMain.languageSwitch;
  return (
    <View>
      <Switch
        value={localisationState.localController}
        onValueChange={toggleSwitch}
        disabled={false}
        activeText={'🇺🇸'}
        inActiveText={'🇷🇺'}
        circleSize={40}
        activeTextStyle={{fontSize: 20}}
        inactiveTextStyle={{fontSize: 20}}
        switchLeftPx={5}
        switchRightPx={5}
        backgroundActive={backgroundActive}
        backgroundInactive={backgroundInactive}
      />
    </View>
  );
};
