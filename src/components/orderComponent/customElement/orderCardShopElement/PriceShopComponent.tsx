import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {FC} from 'react';

type PriceShopComponent = {
  price: number;
};
export const PriceShopComponent: FC<PriceShopComponent> = ({price}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.priceConteiner}>
      <Text
        style={themeState.theme == light ? styles.priceLight : styles.priceDark}
        adjustsFontSizeToFit={true}>
        {price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  priceConteiner: {
    width: 43,
    height: 30,
  },
  priceLight: {
    fontSize: 25,
    fontFamily: 'Lobster-Regular',
    color: '#C8D9AF',
    marginTop: 3,
    textAlign: 'center',
  },
  priceDark: {
    fontSize: 25,
    fontFamily: 'Lobster-Regular',
    color: '#bbb8ee',
    marginTop: 3,
    textAlign: 'center',
  },
});
