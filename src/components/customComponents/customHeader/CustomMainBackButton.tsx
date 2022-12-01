import {Image, StyleSheet, TouchableOpacity} from 'react-native';
// @ts-ignore
import backIconMain from '../../../assets/image/mainScreen/backIconMain.png';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainScreenName} from '../../../navigation/screens/MainScreen';

export const CustomMainBackButton = () => {
  const navigate = useNavigation();
  const backButtonActive = () => {
    // @ts-ignore
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
