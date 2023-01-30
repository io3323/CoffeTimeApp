import {StyleSheet, Text, View} from 'react-native';
import {Switch} from 'react-native-switch';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguageController} from '../../../../../../redux/reduxStateSlice/localisationSlice';
import {en, ru} from '../../../../../../localisationLanguageName';
import {RootState} from '../../../../../../redux/reduxStore/store';

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
  return (
    <View style={styles.switchMainConteiner}>
      <View style={styles.textSwitchConteiner}>
        <Text style={styles.textSwitch}>
          {t('common:drawerScreen:language')}
        </Text>
      </View>
      <View style={styles.switchConteiner}>
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
