import {StyleSheet, View, Image} from 'react-native';
import heartIcon from '../../../assets/image/detailScreen/heartIcon.png';
export const HeartComponent = () => {
  return (
    <View style={styles.heartContainer}>
      <Image source={heartIcon} style={styles.heartIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  heartIcon: {
    width: 20,
    height: 18,
  },
  heartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
