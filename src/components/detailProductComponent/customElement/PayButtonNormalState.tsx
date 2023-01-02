import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {addBasket} from '../../../redux/reduxStateSlice/basketUserSlice';
import {useDispatch, useSelector} from 'react-redux';
import {FunctionComponent} from 'react';
import {RootState} from '../../../redux/reduxStore/store';
import {ru} from '../../../localisationLanguageName';
import {
  buttonNormalProductDetailENG,
  buttonNormalProductDetailRU,
} from '../../../localisationScreen/DetailProductScreenLocal';
import { light } from "../../../themeNameApp";
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
  prevPrice,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
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
      style={themeState.theme == light ? styles.buttonLight : styles.buttonDark}
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
      <Text style={styles.textButton}>
        {localisationState.local == ru
          ? buttonNormalProductDetailRU
          : buttonNormalProductDetailENG}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLight: {
    width: 207,
    height: 41,
    backgroundColor: '#C8D9AF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: 60,
  },
  buttonDark: {
    width: 207,
    height: 41,
    backgroundColor: '#bbb8ee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: 60,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'SFUIText-Regular',
    color: '#FFFFFF',
  },
});
