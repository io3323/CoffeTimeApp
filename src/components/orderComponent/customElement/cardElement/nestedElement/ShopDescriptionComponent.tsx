import {light} from '../../../../../themeNameApp';
import {StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';

export const ShopDescriptionComponent = () => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <Text
      style={
        themeState.theme == light ? styles.textShopLight : styles.textShopDark
      }>
      {t('common:orderScreen:cardShop:shopDescription')}
    </Text>
  );
};

const styles = StyleSheet.create({
  textShopLight: {
    fontSize: 16,
    fontFamily: 'SFUIText-Light',
    color: '#474747',
  },
  textShopDark: {
    fontSize: 16,
    fontFamily: 'SFUIText-Light',
    color: 'white',
  },
});
