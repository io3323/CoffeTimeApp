import {light} from '../../../../../themeNameApp';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../../../Color';

const {color} = Color.orderColorObject.priceDescription;
export const PriceDescriptionComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const {t} = useTranslation();
  return (
    <Text
      style={
        themeState.theme == light
          ? styles.priceDescriptionLight
          : styles.priceDescriptionDark
      }>
      {t('common:orderScreen:cardShop:price')}
    </Text>
  );
};

const styles = StyleSheet.create({
  priceDescriptionLight: {
    fontSize: 23,
    marginTop: 3,
    fontFamily: 'SFUIText-Bold',
    color: color.light,
  },
  priceDescriptionDark: {
    fontSize: 23,
    marginTop: 3,
    fontFamily: 'SFUIText-Bold',
    color: color.dark,
  },
});
