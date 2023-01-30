import {Image, StyleSheet, Text, View} from 'react-native';
import {light} from '../../../themeNameApp';
import rubleGray from '../../../assets/image/detailProductScreen/rubleGray.png';
import rubleDark from '../../../assets/image/detailScreen/rubleIconDark.png';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {FC} from 'react';

type TotalPriceModel = {
  totalPrice: number;
};
export const PriceContainerComponent: FC<TotalPriceModel> = ({totalPrice}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.priceConteiner}>
      <Text
        style={
          themeState.theme == light
            ? styles.totalPriceLight
            : styles.totalPriceDark
        }>
        {totalPrice}
      </Text>
      <Image
        source={themeState.theme == light ? rubleGray : rubleDark}
        style={themeState.theme == light ? styles.rubleGray : styles.rubleDark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  priceConteiner: {display: 'flex', flexDirection: 'row'},
  totalPriceLight: {
    marginLeft: -20,
    fontSize: 30,
    fontFamily: 'Lobster-Regular',
    color: '#474747',
  },
  totalPriceDark: {
    marginLeft: -20,
    fontSize: 30,
    fontFamily: 'Lobster-Regular',
    color: '#bbb8ee',
  },
  rubleGray: {
    width: 20,
    height: 25,
    marginTop: 6,
    marginLeft: 5,
  },
  rubleDark: {
    width: 30,
    height: 35,
    marginTop: 1,
    marginLeft: 5,
  },
});
