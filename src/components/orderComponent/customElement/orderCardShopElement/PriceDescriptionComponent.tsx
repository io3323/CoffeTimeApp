import {light} from '../../../../themeNameApp';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {useTranslation} from 'react-i18next';

export const PriceDescriptionComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const {t} = useTranslation();
  return (
    <Text
      style={
        themeState.theme == light
          ? styles.priceDesriptionLight
          : styles.priceDesriptionDark
      }>
      {t('common:orderScreen:cardShop:price')}
    </Text>
  );
};

const styles = StyleSheet.create({
  priceDesriptionLight: {
    fontSize: 23,
    marginTop: 3,
    fontFamily: 'SFUIText-Bold',
    color: '#474747',
  },
  priceDesriptionDark: {
    fontSize: 23,
    marginTop: 3,
    fontFamily: 'SFUIText-Bold',
    color: 'white',
  },
});
