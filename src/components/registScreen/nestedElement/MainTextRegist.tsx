import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../../../Color';

const {color} = Color.regComponent.mainText;
export const MainTextRegist = () => {
  return (
    <View style={styles.mainTextContainer}>
      <Text style={styles.mainText}>CoffeTime</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTextContainer: {
    marginTop: '5%',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 64,
    color: color,
    fontFamily: 'Lobster-Regular',
  },
});
