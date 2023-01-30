import {StyleSheet, View} from 'react-native';
import {light} from '../../../themeNameApp';
import {DrinkCounterContainerComponent} from './DrinkCounterContainerComponent';
import {PriceContainerComponent} from './PriceContainerComponent';
import {ButtonOrderComponent} from './button/ButtonOrderComponent';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {FC} from 'react';
type BottomOrderModel = {
  totalCount: number;
  totalPrice: number;
};
export const BottomOrderComponent: FC<BottomOrderModel> = ({
  totalPrice,
  totalCount,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.mainConteinerBottom}>
      <View style={styles.collectingBottomConteiner}>
        <View
          style={
            themeState.theme == light
              ? styles.totalViewLight
              : styles.totalViewDark
          }>
          <View style={styles.generalConteiner}>
            <View style={styles.priceAndCountConteiner}>
              <DrinkCounterContainerComponent totalCount={totalCount} />
              <PriceContainerComponent totalPrice={totalPrice} />
            </View>
            <ButtonOrderComponent />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainConteinerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  collectingBottomConteiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalConteiner: {flexDirection: 'row'},
  priceAndCountConteiner: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalViewLight: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalViewDark: {
    backgroundColor: '#6f6483',
    width: '100%',
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
