import {light} from '../../../../../themeNameApp';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {FC} from 'react';
import {Color} from '../../../../../Color';

type CoffeNameShopModel = {
  coffeName: string;
};

const {color} = Color.orderColorObject.coffeeNameShop;
export const CoffeNameShopComponent: FC<CoffeNameShopModel> = ({coffeName}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <Text
      style={
        themeState.theme == light
          ? styles.textShopNameLight
          : styles.textShopNameDark
      }>
      {coffeName}
    </Text>
  );
};

const styles = StyleSheet.create({
  textShopNameLight: {
    fontSize: 16,
    fontFamily: 'SFUIText-Bold',
    color: color.light,
  },
  textShopNameDark: {
    fontSize: 16,
    fontFamily: 'SFUIText-Bold',
    color: color.dark,
  },
});
