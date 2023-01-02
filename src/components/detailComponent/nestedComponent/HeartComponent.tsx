import {StyleSheet, View, Image} from 'react-native';
import heartIcon from '../../../assets/image/detailScreen/heartIcon.png';
export const HeartComponent = () => {
  return (
    <View style={styles.heartConteiner}>
      <Image source={heartIcon} style={styles.headrIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  headrIcon: {
    width: 20,
    height: 18,
  },
  heartConteiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
