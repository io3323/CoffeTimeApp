import {View, Text, StyleSheet} from 'react-native';
export const MapScreenName = 'MapScreen';
export const MapScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});
