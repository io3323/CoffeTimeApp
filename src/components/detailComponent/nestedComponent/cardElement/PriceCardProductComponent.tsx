import {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../themeNameApp';
import rubleIcon from '../../../../assets/image/detailScreen/rubleIcon.png';
import rubleIconDark from '../../../../assets/image/detailScreen/rubleIconDark.png';
import {Color} from '../../../../Color';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';

type PriceCardProductType = {
  price: number;
};
export const PriceCardProductComponent: FC<PriceCardProductType> = ({
  price,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.priceContainer}>
      <Text
        style={
          themeState.theme == light ? styles.priceLight : styles.priceDark
        }>
        {price}
      </Text>
      <Image
        source={themeState.theme == light ? rubleIcon : rubleIconDark}
        style={
          themeState.theme == light
            ? styles.rubleIconLight
            : styles.rubleIconDark
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    marginLeft: 8,
  },
  priceLight: {
    fontSize: 25,
    color: Color.detailColorObject.cardProductComponent.priceColor.light,
    fontFamily: 'Lobster-Regular',
  },
  priceDark: {
    fontSize: 25,
    color: Color.detailColorObject.cardProductComponent.priceColor.dark,
    fontFamily: 'Lobster-Regular',
  },
  rubleIconLight: {
    width: 12,
    height: 19,
    marginTop: 6,
    marginLeft: 8,
  },
  rubleIconDark: {
    width: 22,
    height: 29,
    marginTop: 2,
    marginLeft: 4,
  },
});
