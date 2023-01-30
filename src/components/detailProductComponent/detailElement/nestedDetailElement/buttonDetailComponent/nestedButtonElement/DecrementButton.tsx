import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {deleteBasket} from '../../../../../../redux/reduxStateSlice/basketUserSlice';
import {createDeleteBasketObject} from '../../../../../../externalFunctions/detailScreen/createButtonBasketObject';
import {light} from '../../../../../../themeNameApp';
import minus from '../../../../../../assets/image/detailProductScreen/minus.png';
import minusDark from '../../../../../../assets/image/detailProductScreen/minusDark.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../redux/reduxStore/store';

export const DecrementButton = () => {
  const dispatch = useDispatch();
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(deleteBasket(createDeleteBasketObject(basketObjectState)));
      }}>
      <Image
        source={themeState.theme == light ? minus : minusDark}
        style={styles.incrementButton}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  incrementButton: {
    width: 35,
    height: 35,
  },
});
