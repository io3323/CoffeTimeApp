import {light} from '../../../../../themeNameApp';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';

export const CenterTextContainer = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const infoProductCoffeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  return (
    <Text
      style={
        themeState.theme == light
          ? styles.productNameLight
          : styles.productNameDark
      }>
      {infoProductCoffeState.productName}
    </Text>
  );
};

const styles = StyleSheet.create({
  productNameLight: {
    fontSize: 24,
    fontFamily: 'Lobster-Regular',
    color: '#474747',
  },
  productNameDark: {
    fontSize: 24,
    fontFamily: 'Lobster-Regular',
    color: 'white',
  },
});
