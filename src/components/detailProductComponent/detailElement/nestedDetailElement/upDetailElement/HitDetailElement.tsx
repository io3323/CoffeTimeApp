import {Image, StyleSheet, View} from 'react-native';
import hitIcon from '../../../../../assets/image/detailScreen/hitIcon.png';
import {WIDTH_APP} from '../../../../../definitionSize';

export const HitDetailElement = () => {
  return (
    <View style={styles.hitContainer}>
      <Image source={hitIcon} style={styles.hitImageStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  hitContainer: {
    width: WIDTH_APP,
  },
  hitImageStyles: {
    width: 74,
    height: 41,
  },
});
