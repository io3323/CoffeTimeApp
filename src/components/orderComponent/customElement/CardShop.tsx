import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FunctionComponent, useState} from 'react';
// @ts-ignore
import minus from '../../../assets/image/detailProductScreen/minus.png';
// @ts-ignore
import plus from '../../../assets/image/detailProductScreen/plus.png';
import {
  addBasket,
  deleteBasket,
  deleteProduct,
} from '../../../redux/reduxStateSlice/basketUserSlice';
// @ts-ignore
import rubleIcon from '../../../assets/image/detailScreen/rubleIcon.png';
// @ts-ignore
import imageNoCoffe from '../../../assets/image/detailScreen/imageNoCoffe.png';
// @ts-ignore
import deleteIcon from '../../../assets/image/detailProductScreen/delete.png';
import {useDispatch} from 'react-redux';
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
        <Image source={plus} style={styles.image} />
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
        <Image source={minus} style={styles.image} />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {id != '' && (
        <View style={styles.conteinerMain}>
          <View style={styles.conteiner}>
            <View>
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
            <View style={{marginLeft: 10}}>
              <View style={styles.conteinerVertical}>
                <View style={styles.textPodunctConteinerDelete}>
                  <View style={styles.textProductConteiner}>
                    <Text
                      style={styles.textNameProduct}
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
                <Text style={styles.textShop}>Магазин заказа:</Text>
                <Text style={styles.textShop}>{cofeName}</Text>
                <View style={styles.conteinerPrice}>
                  <Text style={styles.priceDesription}>Цена:</Text>
                  <View style={styles.priceConteiner}>
                    <Text style={styles.price} adjustsFontSizeToFit={true}>
                      {price}
                    </Text>
                  </View>
                  <Image source={rubleIcon} style={styles.rubleIcon} />
                  <View style={styles.conteinerButton}>
                    <Decrement />
                    <View style={styles.countConteiner}>
                      <Text style={styles.counter}>{count}</Text>
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
  image: {
    width: 30,
    height: 30,
  },
  productImage: {
    width: 125,
    height: 125,
    borderRadius: 10,
  },
  conteinerMain: {
    width: 370,
    height: 131,
    backgroundColor: 'white',
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  conteinerButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  textNameProduct: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'Helvetica',
    color: '#474747',
  },
  conteinerVertical: {
    display: 'flex',
    flexDirection: 'column',
  },
  textShop: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    color: '#474747',
  },
  conteinerPrice: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  priceDesription: {
    fontSize: 23,
    marginTop: 3,
    fontFamily: 'Helvetica',
    color: '#474747',
  },
  price: {
    fontSize: 25,
    fontFamily: 'Helvetica',
    color: '#C8D9AF',
    marginTop: 3,
    textAlign: 'center',
  },
  countConteiner: {
    width: 35,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 30,
    color: '#474747',
  },
  rubleIcon: {
    width: 25,
    height: 25,
    marginLeft: -5,
    marginTop: 4,
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
  rowFront: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});
