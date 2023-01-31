import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {Color} from '../../../../../Color';

const {color} = Color.detailProductColorObject.attributeTextColor;
export const AttributeTextDetailElement = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={[styles.textContainer]}>
      <View style={styles.textContainerMilk}>
        <Text
          style={[
            themeState.theme == light
              ? styles.textAttributesMilkLight
              : styles.textAttributesMilkDark,
          ]}>
          15мл
        </Text>
      </View>
      <View style={styles.textContainerCoffee}>
        <Text
          style={[
            themeState.theme == light
              ? styles.textAttributesCoffeeLight
              : styles.textAttributesCoffeeDark,
          ]}>
          {' '}
          25%
        </Text>
      </View>
      <View style={styles.textContainerWater}>
        <Text
          style={[
            themeState.theme == light
              ? styles.textAttributesWaterLight
              : styles.textAttributesWaterDark,
          ]}>
          25мл
        </Text>
      </View>
      <View style={styles.textContainerTemperature}>
        <Text
          style={[
            themeState.theme == light
              ? styles.textAttributesTemperatureLight
              : styles.textAttributesTemperatureDark,
          ]}>
          95`
        </Text>
      </View>
      <View style={styles.textContainerPressure}>
        <Text
          style={[
            themeState.theme == light
              ? styles.textAttributesPressureLight
              : styles.textAttributesPressureDark,
          ]}>
          15б
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainerCoffee: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  textContainerWater: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  textContainerTemperature: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  textContainerPressure: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  textContainerMilk: {
    width: 40,
    alignItems: 'center',
  },
  textAttributesMilkLight: {
    fontSize: 10,
    color: color.light,
  },
  textAttributesMilkDark: {
    fontSize: 10,
    color: color.dark,
  },
  textAttributesCoffeeLight: {
    fontSize: 10,
    color: color.light,
  },
  textAttributesCoffeeDark: {
    fontSize: 10,
    color: color.dark,
  },
  textAttributesWaterLight: {
    fontSize: 10,
    color: color.light,
  },
  textAttributesWaterDark: {
    fontSize: 10,
    color: color.dark,
  },
  textAttributesTemperatureLight: {
    fontSize: 10,
    color: color.light,
  },
  textAttributesTemperatureDark: {
    fontSize: 10,
    color: color.dark,
  },
  textAttributesPressureLight: {
    fontSize: 10,
    color: color.light,
  },
  textAttributesPressureDark: {
    fontSize: 10,
    color: color.dark,
  },
});
