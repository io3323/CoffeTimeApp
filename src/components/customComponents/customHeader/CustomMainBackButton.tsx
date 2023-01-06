import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import backIconMain from '../../../assets/image/mainScreen/backIconMain.png';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {MainScreenName} from '../../../navigation/screens/MainScreen';
import {StackNavigationProp} from '@react-navigation/stack';

export const CustomMainBackButton = () => {
  const navigate = useNavigation<StackNavigationProp<ParamListBase>>();
  const backButtonActive = () => {
    navigate.navigate(MainScreenName);
  };
  return (
    <TouchableOpacity onPress={() => backButtonActive()}>
      <Image source={backIconMain} style={styles.backButton} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 25,
    height: 25,
    marginLeft: -10,
  },
});
