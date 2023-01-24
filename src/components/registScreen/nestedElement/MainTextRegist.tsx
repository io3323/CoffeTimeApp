import {StyleSheet, Text, View} from 'react-native';

export const MainTextRegist = () => {
  return (
    <View style={styles.mainTextConteiner}>
      <Text style={styles.mainText}>CoffeTime</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTextConteiner: {
    marginTop: '5%',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 64,
    color: '#FFFFFF',
    fontFamily: 'Lobster-Regular',
  },
});
