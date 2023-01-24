import {Image, StyleSheet, View} from 'react-native';
import pencilIcon from '../../../../assets/image/regImageScreen/pencilIcon.png';

export const PencilIcon = () => {
  return (
    <View>
      <Image style={styles.pencilIcon} source={pencilIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  pencilIcon: {
    width: 42,
    height: 39,
    marginLeft: '50%',
    position: 'absolute',
  },
});
