import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {addBasket} from '../../../../../redux/reduxStateSlice/basketUserSlice';
import {createShopBasketObject} from '../../../../../externalFunctions/orderScreen/createBasketObject';
import {light} from '../../../../../themeNameApp';
import plus from '../../../../../assets/image/detailProductScreen/plus.png';
import plusDark from '../../../../../assets/image/detailProductScreen/plusDark.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {ICardOrder} from '../../../../../externalFunctions/orderScreen/createCardShop';
import {FC} from 'react';
type IncrementShopButtonModel = {
  item: ICardOrder;
};
export const IncrementShopButtonElement: FC<IncrementShopButtonModel> = ({
  item,
}) => {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(addBasket(createShopBasketObject(item)));
      }}>
      <Image
        source={themeState.theme == light ? plus : plusDark}
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
