import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';

export const AttributeTextDetailElement = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={[styles.textConteiner]}>
      <View style={styles.textConteinerMilk}>
        <Text
          style={[
            themeState.theme == light
              ? styles.textAtributesMilkLight
              : styles.textAtributesMilkDark,
          ]}>
          15мл
        </Text>
      </View>
      <View style={styles.textConteinerCoffe}>
        <Text
          style={[
            themeState.theme == light
              ? styles.textAtributesCoffeLight
              : styles.textAtributesCoffeDark,
          ]}>
          {' '}
          25%
        </Text>
      </View>
      <View style={styles.textConteinerWater}>
        <Text
          style={[
            themeState.theme == light
              ? styles.textAtributesWaterLight
              : styles.textAtributesWaterDark,
          ]}>
          25мл
        </Text>
      </View>
      <View style={styles.textConteinerTemperature}>
        <Text
          style={[
            themeState.theme == light
              ? styles.textAtributesTemperatureLight
              : styles.textAtributesTemperatureDark,
          ]}>
          95`
        </Text>
      </View>
      <View style={styles.textConteinerPression}>
        <Text
          style={[
            themeState.theme == light
              ? styles.textAtributesPressionLight
              : styles.textAtributesPressionDark,
          ]}>
          15б
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textConteinerCoffe: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  textConteinerWater: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  textConteinerTemperature: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  textConteinerPression: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  textConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  textConteinerMilk: {
    width: 40,
    alignItems: 'center',
  },
  textAtributesMilkLight: {
    fontSize: 10,
    color: '#474747',
  },
  textAtributesMilkDark: {
    fontSize: 10,
    color: 'white',
  },
  textAtributesCoffeLight: {
    fontSize: 10,
    color: '#474747',
  },
  textAtributesCoffeDark: {
    fontSize: 10,
    color: 'white',
  },
  textAtributesWaterLight: {
    fontSize: 10,
    color: '#474747',
  },
  textAtributesWaterDark: {
    fontSize: 10,
    color: 'white',
  },
  textAtributesTemperatureLight: {
    fontSize: 10,
    color: '#474747',
  },
  textAtributesTemperatureDark: {
    fontSize: 10,
    color: 'white',
  },
  textAtributesPressionLight: {
    fontSize: 10,
    color: '#474747',
  },
  textAtributesPressionDark: {
    fontSize: 10,
    color: 'white',
  },
});
