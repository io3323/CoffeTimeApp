import {View} from 'react-native';
import {Switch} from 'react-native-switch';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {
  changeLanguage,
  changeLanguageController,
} from '../../../../redux/reduxStateSlice/localisationSlice';
import {eng, ru} from '../../../../localisationLanguageName';

export const SettingsLanguageSwitch = () => {
  const dispatch = useDispatch();
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const toggleSwitch = () => {
    dispatch(changeLanguageController());
    localisationState.localController
      ? dispatch(changeLanguage({local: ru}))
      : dispatch(changeLanguage({local: eng}));
  };
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
        backgroundActive={'#6c6c6c'}
        backgroundInactive={'#6C6C6CFF'}
      />
    </View>
  );
};
