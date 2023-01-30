import {light} from '../../../../themeNameApp';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {useTranslation} from 'react-i18next';
import {FC} from 'react';
import {DrinkCountModel} from './DrinkCountModel';
export const DrinkCountElement: FC<DrinkCountModel> = ({totalCount}) => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <Text
      style={
        themeState.theme == light
          ? styles.totalCountsProductLight
          : styles.totalCountsProductDark
      }>
      {totalCount} {t('common:orderScreen:drinkCount')}
    </Text>
  );
};

const styles = StyleSheet.create({
  totalCountsProductLight: {
    fontSize: 15,
    fontFamily: 'SFUIText-Light',
  },
  totalCountsProductDark: {
    fontSize: 15,
    fontFamily: 'SFUIText-Light',
    color: 'white',
  },
});
