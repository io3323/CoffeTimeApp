import {Image, StyleSheet, TouchableOpacity} from 'react-native';
// @ts-ignore
import shoppingBag from '../../../assets/image/rigtNavigateIcon/shoppingBag.png'
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const CustomBagShopButton = () => {
  const navigate = useNavigation();
  const backButtonActive = () => {
    // @ts-ignore
    navigate.navigate('OrderScreen');

  };
  return (
    <TouchableOpacity onPress={() => backButtonActive()}>
      <Image source={shoppingBag} style={styles.backButton} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 40,
    height: 40,
    marginLeft: -10,
  },
});
