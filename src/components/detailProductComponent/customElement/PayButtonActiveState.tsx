import {FunctionComponent, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import minus from '../../../assets/image/detailProductScreen/minus.png';
// @ts-ignore
import plus from '../../../assets/image/detailProductScreen/plus.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {
  addBasket,
  deleteBasket,
  IBasketUser,
} from '../../../redux/reduxStateSlice/basketUserSlice';
interface IActive {
  idSelected: string;
}
export const PayButtonActiveState: FunctionComponent<IActive> = ({
  idSelected,
}) => {
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  const dispatch = useDispatch();
  const IncrementButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(
            addBasket({
              id: basketObjectState.id,
              productName: basketObjectState.productName,
              price: basketObjectState.price,
              cofeId: basketObjectState.cofeId,
              cofeName: basketObjectState.cofeName,
              imagesPath: basketObjectState.imagesPath,
              count: basketObjectState.count,
              prevState: basketObjectState.prevPrice,
            }),
          );
        }}>
        <Image source={plus} style={styles.incrementButton} />
      </TouchableOpacity>
    );
  };
  const DecrementButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(
            deleteBasket({
              id: basketObjectState.id,
              productName: basketObjectState.productName,
              price: basketObjectState.price,
              cofeId: basketObjectState.cofeId,
              cofeName: basketObjectState.cofeName,
              imagesPath: basketObjectState.imagesPath,
              count: 1,
              prevState: basketObjectState.prevPrice,
            }),
          );
        }}>
        <Image source={minus} style={styles.incrementButton} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.conteiner}>
      <Text style={styles.textBlock}>Заказать</Text>
      <DecrementButton />
      <View style={styles.textConteiner}>
        <Text style={styles.textCount}>{basketObjectState.count}</Text>
      </View>
      <IncrementButton />
    </View>
  );
};
const styles = StyleSheet.create({
  incrementButton: {
    width: 35,
    height: 35,
  },
  decrementButton: {
    width: 50,
    height: 50,
  },
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#C8D9AF',
    width: 215,
    height: 41,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 7,
    marginLeft: 60,
  },
  textCount: {
    fontSize: 40,
    marginTop: -5,
    color: '#474747',
  },
  textConteiner: {
    backgroundColor: 'white',
    width: 50,
    height: 35,
    alignItems: 'center',
  },
  textBlock: {
    fontSize: 20,
    color: 'white',
    marginRight: 5,
  },
});
