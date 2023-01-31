import {light} from '../../../../../themeNameApp';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {Color} from '../../../../../Color';

const {productNameColor} = Color.detailProductColorObject.centerTextContainer;
export const CenterTextContainer = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const infoProductCoffeeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  return (
    <Text
      style={
        themeState.theme == light
          ? styles.productNameLight
          : styles.productNameDark
      }>
      {infoProductCoffeeState.productName}
    </Text>
  );
};

const styles = StyleSheet.create({
  productNameLight: {
    fontSize: 24,
    fontFamily: 'Lobster-Regular',
    color: productNameColor.light,
  },
  productNameDark: {
    fontSize: 24,
    fontFamily: 'Lobster-Regular',
    color: productNameColor.dark,
  },
});
