import {Image, StyleSheet, View} from 'react-native';
import milk from '../../../../../assets/image/detailProductScreen/milk.png';
import coffe from '../../../../../assets/image/detailProductScreen/coffe.png';
import water from '../../../../../assets/image/detailProductScreen/water.png';
import temperature from '../../../../../assets/image/detailProductScreen/temperature.png';
import pressure from '../../../../../assets/image/detailProductScreen/pressure.png';

export const AttributeImageDetail = () => {
  return (
    <View style={styles.imageConteiner}>
      <Image source={milk} style={styles.atributeIconMilk} />
      <Image source={coffe} style={styles.attributeIconCoffe} />
      <Image source={water} style={styles.attributeIconWater} />
      <Image source={temperature} style={styles.attributeIconTemperature} />
      <Image source={pressure} style={styles.attributeIconBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  atributeIconMilk: {
    width: 40,
    height: 40,
  },
  attributeIconCoffe: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  attributeIconWater: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  attributeIconTemperature: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  attributeIconBar: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
});
