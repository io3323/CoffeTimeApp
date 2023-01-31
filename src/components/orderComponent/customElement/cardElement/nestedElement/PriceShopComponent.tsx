import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {FC} from 'react';
import {Color} from '../../../../../Color';

type PriceShopComponent = {
  price: number;
};

const {color} = Color.orderColorObject.priceShopComponent;
export const PriceShopComponent: FC<PriceShopComponent> = ({price}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.priceContainer}>
      <Text
        style={themeState.theme == light ? styles.priceLight : styles.priceDark}
        adjustsFontSizeToFit={true}>
        {price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    width: 43,
    height: 30,
  },
  priceLight: {
    fontSize: 25,
    fontFamily: 'Lobster-Regular',
    color: color.light,
    marginTop: 3,
    textAlign: 'center',
  },
  priceDark: {
    fontSize: 25,
    fontFamily: 'Lobster-Regular',
    color: color.dark,
    marginTop: 3,
    textAlign: 'center',
  },
});
