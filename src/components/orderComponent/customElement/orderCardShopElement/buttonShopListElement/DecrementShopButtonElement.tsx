import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {deleteBasket} from '../../../../../redux/reduxStateSlice/basketUserSlice';
import {createShopBasketObject} from '../../../../../externalFunctions/orderScreen/createBasketObject';
import {light} from '../../../../../themeNameApp';
import minus from '../../../../../assets/image/detailProductScreen/minus.png';
import minusDark from '../../../../../assets/image/detailProductScreen/minusDark.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {ICardOrder} from '../../../../../externalFunctions/orderScreen/createCardShop';
import {FC} from 'react';
type DecrementShopButtonElement = {
  item: ICardOrder;
};
export const DecrementShopButtonComponent: FC<DecrementShopButtonElement> = ({
  item,
}) => {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(deleteBasket(createShopBasketObject(item)));
      }}>
      <Image
        source={themeState.theme == light ? minus : minusDark}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});
