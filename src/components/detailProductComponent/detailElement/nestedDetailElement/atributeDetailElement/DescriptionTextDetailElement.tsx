import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {useTranslation} from 'react-i18next';
import {HEIGHT_APP} from '../../../../../definitionSize';
import {Color} from '../../../../../Color';
const {color} = Color.detailProductColorObject.descriptionTextColor;
export const DescriptionTextDetailElement = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const infoProductCoffeeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );

  const globalRegSlice = useSelector(
    (state: RootState) => state.globalRegState,
  );

  const productInfoNoRegSlice = useSelector(
    (state: RootState) => state.productInfoNoRegState,
  );

  const {t} = useTranslation();
  return (
    <View style={styles.textDescriptionContainer}>
      {globalRegSlice ? (
        <Text
          style={
            themeState.theme == light
              ? styles.textDescriptionLight
              : styles.textDescriptionDark
          }>
          {productInfoNoRegSlice.description}
        </Text>
      ) : (
        <Text
          style={
            themeState.theme == light
              ? styles.textDescriptionLight
              : styles.textDescriptionDark
          }>
          {infoProductCoffeeState.productName} –{' '}
          {t('common:detailProductScreen:descriptionProduct')}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textDescriptionContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '94%',
    height: HEIGHT_APP * 0.2,
  },
  textDescriptionLight: {
    color: color.light,
    fontSize: HEIGHT_APP * 0.023,
    fontFamily: 'SFUIText-Light',
  },
  textDescriptionDark: {
    color: color.dark,
    fontSize: HEIGHT_APP * 0.023,
    fontFamily: 'SFUIText-Light',
  },
});
