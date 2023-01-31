import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Color} from '../../../Color';
const {backgroundColor} = Color.mapColorObject.mapSeparator;
export const MapSeparatorElement = () => {
  return <View style={styles.separator} />;
};
const styles = StyleSheet.create({
  separator: {
    width: 200,
    height: 1,
    backgroundColor: backgroundColor,
    marginTop: 5,
    marginLeft: '8.2%',
  },
});
