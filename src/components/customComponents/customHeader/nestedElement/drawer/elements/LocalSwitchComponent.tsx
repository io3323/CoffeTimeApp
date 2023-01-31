import {StyleSheet, Text, View} from 'react-native';
import {Switch} from 'react-native-switch';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguageController} from '../../../../../../redux/reduxStateSlice/localisationSlice';
import {en, ru} from '../../../../../../localisationLanguageName';
import {RootState} from '../../../../../../redux/reduxStore/store';
import {Color} from '../../../../../../Color';

export const LocalSwitchComponent = () => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const changeLanguge = (language: string) => {
    i18n.changeLanguage(language);
  };
  const toggleSwitch = () => {
    dispatch(changeLanguageController());
    localisationState.localController ? changeLanguge(ru) : changeLanguge(en);
  };
  const {backgroundActive, backgroundInactive} =
    Color.drawerColorObject.languageSwitch;
  return (
    <View style={styles.switchMainContainer}>
      <View style={styles.textSwitchContainer}>
        <Text style={styles.textSwitch}>
          {t('common:drawerScreen:language')}
        </Text>
      </View>
      <View style={styles.switchContainer}>
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
