import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {Color} from '../../../../../Color';
const {color} = Color.detailProductColorObject.textPriceColor;
export const TextPriceContainer = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );

  const globalRegSlice = useSelector(
    (state: RootState) => state.globalRegState,
  );

  const productInfoNoRegSlice = useSelector(
    (state: RootState) => state.productInfoNoRegState,
  );

  return (
    <View style={styles.textPriceContainer}>
      {globalRegSlice ? (
        <Text
          style={
            themeState.theme == light ? styles.priceLight : styles.priceDark
          }
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          {basketObjectState.price}
        </Text>
      ) : (
        <Text
          style={
            themeState.theme == light ? styles.priceLight : styles.priceDark
          }
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          {basketObjectState.price}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textPriceContainer: {
    width: 50,
    height: 35,
  },
  priceLight: {
    fontSize: 30,
    color: color.light,
    textAlign: 'center',
  },
  priceDark: {
    fontSize: 30,
    color: color.dark,
    textAlign: 'center',
  },
});
