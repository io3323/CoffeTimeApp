import {Image, StyleSheet, View} from 'react-native';
// @ts-ignore
import mapIcon from '../../../assets/image/mainScreen/segmentControlIcon/mapIcon.png';
export const CustomMapIcon = () => {
  return (
    <View style={styles.conteiner}>
      <Image source={mapIcon} style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: 15,
    height: 20,
  },
  conteiner: {
    marginTop: 6,
    marginRight: 25,
  },
});
