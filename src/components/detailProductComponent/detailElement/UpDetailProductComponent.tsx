import {StyleSheet, View} from 'react-native';
import {HEIGHT_APP} from '../../../definitionSize';
import {HitDetailElement} from './nestedDetailElement/upDetailElement/HitDetailElement';
import {ImageBackgroundProductDetail} from './nestedDetailElement/upDetailElement/ImageBackgroundProductDetail';

export const UpDetailProductComponent = () => {
  return (
    <View style={styles.upConteiner}>
      <HitDetailElement />
      <ImageBackgroundProductDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  upConteiner: {
    alignItems: 'center',
    height: HEIGHT_APP * 0.35,
    justifyContent: 'flex-start',
  },
});
