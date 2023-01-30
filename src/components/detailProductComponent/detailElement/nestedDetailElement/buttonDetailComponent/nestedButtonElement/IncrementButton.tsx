import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {addBasket} from '../../../../../../redux/reduxStateSlice/basketUserSlice';
import {createButtonBasketObject} from '../../../../../../externalFunctions/detailScreen/createButtonBasketObject';
import {light} from '../../../../../../themeNameApp';
import plus from '../../../../../../assets/image/detailProductScreen/plus.png';
import plusDark from '../../../../../../assets/image/detailProductScreen/plusDark.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../redux/reduxStore/store';

export const IncrementButton = () => {
  const dispatch = useDispatch();
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(addBasket(createButtonBasketObject(basketObjectState)));
      }}>
      <Image
        source={themeState.theme == light ? plus : plusDark}
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
