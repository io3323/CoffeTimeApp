import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';

export const TextPriceContainer = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  return (
    <View style={styles.textPriceConteiner}>
      <Text
        style={themeState.theme == light ? styles.priceLight : styles.priceDark}
        adjustsFontSizeToFit={true}
        numberOfLines={1}>
        {basketObjectState.price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPriceConteiner: {
    width: 50,
    height: 35,
  },
  priceLight: {
    fontSize: 30,
    color: '#6c6c6c',
    textAlign: 'center',
  },
  priceDark: {
    fontSize: 30,
    color: '#bbb8ee',
    textAlign: 'center',
  },
});
