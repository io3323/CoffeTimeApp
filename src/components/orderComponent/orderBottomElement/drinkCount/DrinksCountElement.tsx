import {light} from '../../../../themeNameApp';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {useTranslation} from 'react-i18next';
import {FC} from 'react';
import { DrinkCountModel } from "./DrinkCountModel";
export const DrinksCountElement: FC<DrinkCountModel> = ({totalCount}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const {t} = useTranslation();
  return (
    <Text
      style={
        themeState.theme == light
          ? styles.totalCountsProductLight
          : styles.totalCountsProductDark
      }>
      {totalCount} {t('common:orderScreen:drinksCount')}
    </Text>
  );
};

export const styles = StyleSheet.create({
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
