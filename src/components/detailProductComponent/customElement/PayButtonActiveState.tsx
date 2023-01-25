import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import minus from '../../../assets/image/detailProductScreen/minus.png';
import plus from '../../../assets/image/detailProductScreen/plus.png';
import minusDark from '../../../assets/image/detailProductScreen/minusDark.png';
import plusDark from '../../../assets/image/detailProductScreen/plusDark.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {
  addBasket,
  deleteBasket,
} from '../../../redux/reduxStateSlice/basketUserSlice';
import {light} from '../../../themeNameApp';
import {useTranslation} from 'react-i18next';
export const PayButtonActiveState = () => {
  const {t} = useTranslation();
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
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
        <Image
          source={themeState.theme == light ? plus : plusDark}
          style={styles.incrementButton}
        />
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
        <Image
          source={themeState.theme == light ? minus : minusDark}
          style={styles.incrementButton}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={
        themeState.theme == light ? styles.conteinerLight : styles.conteinerDark
      }>
      <Text style={styles.textBlock}>
        {t('common:detailProductScreen:button')}
      </Text>
      <DecrementButton />
      <View
        style={
          themeState.theme == light
            ? styles.textConteinerLight
            : styles.textConteinerDark
        }>
        <Text
          style={
            themeState.theme == light
              ? styles.textCountLight
              : styles.textCountDark
          }
          adjustsFontSizeToFit={true}>
          {basketObjectState.count}
        </Text>
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
  conteinerLight: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#C8D9AF',
    width: 215,
    height: 41,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 60,
  },
  conteinerDark: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#bbb8ee',
    width: 215,
    height: 41,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 60,
  },
  textCountLight: {
    fontSize: 35,
    color: '#474747',
  },
  textCountDark: {
    fontSize: 35,
    color: 'white',
  },
  textConteinerLight: {
    backgroundColor: 'white',
    width: 50,
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    flex: 1,
  },
  textConteinerDark: {
    backgroundColor: '#716388',
    width: 50,
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flex: 1,
  },
  textBlock: {
    fontSize: 20,
    color: 'white',
    marginRight: 5,
    fontFamily: 'SFUIText-Regular',
  },
});
