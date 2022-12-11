import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {addBasket} from '../../../redux/reduxStateSlice/basketUserSlice';
import {useDispatch} from 'react-redux';
import {FunctionComponent} from 'react';
interface IButtonState {
  id: string;
  productName: string;
  price: number;
  cofeId: string;
  cofeName: string;
  imagesPath: string;
  count: number;
  prevPrice: number;
}
export const PayButtonNormalState: FunctionComponent<IButtonState> = ({
  id,
  productName,
  price,
  cofeId,
  cofeName,
  imagesPath,
  count,
  prevPrice
}) => {
  const dispatch = useDispatch();
  const userBasketAdd = (
    idFunc: string,
    productNameFunc: string,
    priceFunc: number,
    cofeIdFunc: string,
    cofeNameFunc: string,
    imagesPathFunc: string,
    countFunc: number,
    prevPriceFunc: number,
  ) => {
    dispatch(
      addBasket({
        id: idFunc,
        productName: productNameFunc,
        price: priceFunc,
        cofeId: cofeIdFunc,
        cofeName: cofeNameFunc,
        imagesPath: imagesPathFunc,
        count: countFunc,
        prevState: prevPriceFunc,
      }),
    );
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        userBasketAdd(
          id,
          productName,
          price,
          cofeId,
          cofeName,
          imagesPath,
          count,
          prevPrice,
        );
      }}>
      <Text style={styles.textButton}>Заказать</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 207,
    height: 41,
    backgroundColor: '#C8D9AF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: 75,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'SFUIText-Regular',
    color: '#FFFFFF',
  },
});
