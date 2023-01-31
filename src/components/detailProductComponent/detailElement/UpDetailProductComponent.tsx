import {StyleSheet, View} from 'react-native';
import {HEIGHT_APP} from '../../../definitionSize';
import {HitDetailElement} from './nestedDetailElement/upDetailElement/HitDetailElement';
import {ImageBackgroundProductDetail} from './nestedDetailElement/upDetailElement/ImageBackgroundProductDetail';

export const UpDetailProductComponent = () => {
  return (
    <View style={styles.upContainer}>
      <HitDetailElement />
      <ImageBackgroundProductDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  upContainer: {
    alignItems: 'center',
    height: HEIGHT_APP * 0.35,
    justifyContent: 'flex-start',
  },
});
