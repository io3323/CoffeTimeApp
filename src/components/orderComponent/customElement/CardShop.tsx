import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FunctionComponent, useState} from 'react';
import minus from '../../../assets/image/detailProductScreen/minus.png';
import plus from '../../../assets/image/detailProductScreen/plus.png';
import minusDark from '../../../assets/image/detailProductScreen/minusDark.png';
import plusDark from '../../../assets/image/detailProductScreen/plusDark.png';
import {
  addBasket,
  deleteBasket,
  deleteProduct,
} from '../../../redux/reduxStateSlice/basketUserSlice';
import rubleIcon from '../../../assets/image/detailScreen/rubleIcon.png';
import rubleDark from '../../../assets/image/detailScreen/rubleIconDark.png';
import imageNoCoffe from '../../../assets/image/detailScreen/imageNoCoffe.png';
import deleteIcon from '../../../assets/image/detailProductScreen/delete.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
interface ICardShop {
  id: string;
  productName: string;
  price: number;
  cofeId: string;
  cofeName: string;
  imagesPath: string;
  count: number;
  prevPrice: number;
}
export const CardShop: FunctionComponent<ICardShop> = ({
  id,
  productName,
  price,
  cofeId,
  cofeName,
  imagesPath,
  count,
  prevPrice,
}) => {
  const dispatch = useDispatch();
  const [controler, setControler] = useState(true);
  const themeState = useSelector((state: RootState) => state.themeState);
  const Increment = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(
            addBasket({
              id: id,
              productName: productName,
              price: price,
              cofeId: cofeId,
              cofeName: cofeName,
              imagesPath: imagesPath,
              count: 1,
              prevState: prevPrice,
            }),
          );
        }}>
        <Image
          source={themeState.theme == light ? plus : plusDark}
          style={styles.image}
        />
      </TouchableOpacity>
    );
  };
  const Decrement = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(
            deleteBasket({
              id: id,
              productName: productName,
              price: price,
              cofeId: cofeId,
              cofeName: cofeName,
              imagesPath: imagesPath,
              count: 1,
              prevState: prevPrice,
            }),
          );
        }}>
        <Image
          source={themeState.theme == light ? minus : minusDark}
          style={styles.image}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {id != '' && (
        <View
          style={
            themeState.theme == light
              ? styles.conteinerMainLight
              : styles.conteinerMainDark
          }>
          <View style={[styles.conteiner]}>
            <View style={styles.imageConteiner}>
              {controler && (
                <Image
                  source={{uri: imagesPath}}
                  style={styles.productImage}
                  onError={() => setControler(false)}
                />
              )}
              {controler == false && (
                <Image source={imageNoCoffe} style={styles.productImage} />
              )}
            </View>
            <View style={styles.blockConteiner}>
              <View style={styles.conteinerVertical}>
                <View style={styles.textPodunctConteinerDelete}>
                  <View style={styles.textProductConteiner}>
                    <Text
                      style={
                        themeState.theme == light
                          ? styles.textNameProductLight
                          : styles.textNameProductDark
                      }
                      adjustsFontSizeToFit={true}>
                      {productName}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.deleteIconConteiner}
                    onPress={() => dispatch(deleteProduct(id))}>
                    <Image source={deleteIcon} style={styles.deleteIcon} />
                  </TouchableOpacity>
                </View>
                <Text
                  style={
                    themeState.theme == light
                      ? styles.textShopLight
                      : styles.textShopDark
                  }>
                  Магазин заказа:
                </Text>
                <Text
                  style={
                    themeState.theme == light
                      ? styles.textShopNameLight
                      : styles.textShopNameDark
                  }>
                  {cofeName}
                </Text>
                <View style={styles.conteinerPrice}>
                  <Text
                    style={
                      themeState.theme == light
                        ? styles.priceDesriptionLight
                        : styles.priceDesriptionDark
                    }>
                    Цена:
                  </Text>
                  <View style={styles.priceConteiner}>
                    <Text
                      style={
                        themeState.theme == light
                          ? styles.priceLight
                          : styles.priceDark
                      }
                      adjustsFontSizeToFit={true}>
                      {price}
                    </Text>
                  </View>
                  <Image
                    source={themeState.theme == light ? rubleIcon : rubleDark}
                    style={
                      themeState.theme == light
                        ? styles.rubleIconLight
                        : styles.rubleIconDark
                    }
                  />
                  <View style={themeState.theme == light ? styles.conteinerButtonLight : styles.conteinerButtonDark}>
                    <Decrement />
                    <View style={styles.countConteiner}>
                      <Text
                        style={
                          themeState.theme == light
                            ? styles.counterLight
                            : styles.counterDark
                        }
                        adjustsFontSizeToFit={true}>
                        {count}
                      </Text>
                    </View>
                    <Increment />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
  },
  blockConteiner: {
    marginLeft: 10,
  },
  imageConteiner: {justifyContent: 'center', alignItems: 'center'},
  image: {
    width: 30,
    height: 30,
  },
  productImage: {
    width: 125,
    height: 125,
    borderRadius: 10,
  },
  conteinerMainLight: {
    width: 370,
    height: 131,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
  },
  conteinerMainDark: {
    width: 370,
    height: 131,
    backgroundColor: '#6f6483',
    marginTop: 20,
    borderRadius: 10,
  },
  conteinerButtonLight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 9,
  },
  conteinerButtonDark: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 4,
  },
  textNameProductLight: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'Lobster-Regular',
    color: '#474747',
  },
  textNameProductDark: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'Lobster-Regular',
    color: 'white',
  },
  conteinerVertical: {
    display: 'flex',
    flexDirection: 'column',
  },
  textShopLight: {
    fontSize: 16,
    fontFamily: 'SFUIText-Light',
    color: '#474747',
  },
  textShopDark: {
    fontSize: 16,
    fontFamily: 'SFUIText-Light',
    color: 'white',
  },
  textShopNameLight: {
    fontSize: 16,
    fontFamily: 'SFUIText-Bold',
    color: '#474747',
  },
  textShopNameDark: {
    fontSize: 16,
    fontFamily: 'SFUIText-Bold',
    color: 'white',
  },
  conteinerPrice: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-end',
  },
  priceDesriptionLight: {
    fontSize: 23,
    marginTop: 3,
    fontFamily: 'SFUIText-Bold',
    color: '#474747',
  },
  priceDesriptionDark: {
    fontSize: 23,
    marginTop: 3,
    fontFamily: 'SFUIText-Bold',
    color: 'white',
  },
  priceLight: {
    fontSize: 25,
    fontFamily: 'Lobster-Regular',
    color: '#C8D9AF',
    marginTop: 3,
    textAlign: 'center',
  },
  priceDark: {
    fontSize: 25,
    fontFamily: 'Lobster-Regular',
    color: '#bbb8ee',
    marginTop: 3,
    textAlign: 'center',
  },
  countConteiner: {
    width: 35,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterLight: {
    fontSize: 30,
    color: '#474747',
  },
  counterDark: {
    fontSize: 30,
    color: 'white',
  },
  rubleIconLight: {
    width: 15,
    height: 23,
    marginLeft: -5,
    marginBottom: 5,
  },
  rubleIconDark: {
    width: 25,
    height: 30,
    marginLeft: -5,
  },
  priceConteiner: {
    width: 43,
    height: 30,
  },
  textProductConteiner: {
    width: 170,
    height: 30,
  },
  textPodunctConteinerDelete: {
    display: 'flex',
    flexDirection: 'row',
    width: 235,
    height: 30,
  },
  deleteIcon: {
    width: 26,
    height: 26,
  },
  deleteIconConteiner: {
    marginTop: 6,
    marginLeft: 30,
  },
});
