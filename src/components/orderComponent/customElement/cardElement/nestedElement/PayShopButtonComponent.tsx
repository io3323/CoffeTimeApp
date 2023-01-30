import {light} from '../../../../../themeNameApp';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {FC} from 'react';
import {IncrementShopButtonElement} from '../../orderCardShopElement/buttonShopListElement/IncrementShopButtonElement';
import {ICardOrder} from '../../../../../externalFunctions/orderScreen/createCardShop';
import {DecrementShopButtonComponent} from '../../orderCardShopElement/buttonShopListElement/DecrementShopButtonElement';
import {CounterShopComponent} from '../../orderCardShopElement/buttonShopListElement/CounterShopComponent';

type PayShopButtonComponent = {
  count: number;
  item: ICardOrder;
};
export const PayShopButtonComponent: FC<PayShopButtonComponent> = ({
  count,
  item,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View
      style={
        themeState.theme == light
          ? styles.containerButtonLight
          : styles.containerButtonDark
      }>
      <DecrementShopButtonComponent item={item} />
      <CounterShopComponent count={count} />
      <IncrementShopButtonElement item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerButtonLight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 9,
  },
  containerButtonDark: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 4,
  },
});
