import {StyleSheet, View} from 'react-native';
import React from 'react';

export const MapSeparatorElement = () => {
  return <View style={styles.separator} />;
};
const styles = StyleSheet.create({
  separator: {
    width: 200,
    height: 1,
    backgroundColor: '#D8D8D8',
    marginTop: 5,
    marginLeft: '8.2%',
  },
});
