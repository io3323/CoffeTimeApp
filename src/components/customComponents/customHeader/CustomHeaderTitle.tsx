import {StyleSheet, Text, View} from 'react-native';

export const CustomHeaderTitle = () => {
  return (
    <View>
      <Text style={styles.textHeader}>CoffeTime</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 28,
    color: '#474747',
  },
});
