import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {AuthScreenName} from '../../../../../../navigation/navigator/nameScreen';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export const ExitButtonComponent = () => {
  const {t} = useTranslation();
  const exitActionButton = () => {
    setTimeout(() => navigation.navigate(AuthScreenName), 1000);
  };
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      style={styles.exitButton}
      onPress={() => exitActionButton()}>
      <Text style={styles.exitButtonText}>{t('exit')}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  exitButton: {
    backgroundColor: 'red',
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  exitButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'SFUIText-Regular',
  },
});
