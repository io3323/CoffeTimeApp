import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
// @ts-ignore
import heartIcon from '../../assets/image/detailScreen/heartIcon.png';
// @ts-ignore
import heartGrayIcon from '../../assets/image/detailScreen/heartGrayIcon.png';
// @ts-ignore
import milk from '../../assets/image/detailProductScreen/milk.png';
// @ts-ignore
import coffe from '../../assets/image/detailProductScreen/coffe.png';
// @ts-ignore
import pressure from '../../assets/image/detailProductScreen/pressure.png';
// @ts-ignore
import temperature from '../../assets/image/detailProductScreen/temperature.png';
// @ts-ignore
import water from '../../assets/image/detailProductScreen/water.png';
// @ts-ignore
import rubleGray from '../../assets/image/detailProductScreen/rubleGray.png';
// @ts-ignore
import imageNoCoffe from '../../assets/image/detailScreen/imageNoCoffe.png';
import {useEffect, useState} from 'react';
import {
  addBasket,
  IBasketUser,
} from '../../redux/reduxStateSlice/basketUserSlice';
import {
  addCountDecrement,
  addCountIncrement,
} from '../../redux/reduxStateSlice/counterSlice';
import {PayButtonNormalState} from './customElement/PayButtonNormalState';
import {PayButtonActiveState} from './customElement/PayButtonActiveState';
import {addBacketObject} from '../../redux/reduxStateSlice/basketObjectSlice';
export const DetailProductComponent = () => {
  const infoProductCoffeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  const [controller, setController] = useState(true);
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const counterState = useSelector((state: RootState) => state.counterState);
  const dispatch = useDispatch();
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  useEffect(() => {
    //console.log(basketUserState,'basketUserState')
    basketUserState.map(data => {
      if (data.id == infoProductCoffeState.id && data.id != '') {
        dispatch(
          addBacketObject({
            id: data.id,
            productName: data.productName,
            price: data.price,
            cofeId: data.cofeId,
            cofeName: data.cofeName,
            imagesPath: data.imagesPath,
            count: data.count,
            prevPrice: infoProductCoffeState.price,
          }),
        );
      }
      if (data.id == '') {
        dispatch(
          addBacketObject({
            id: '',
            productName: '',
            price: infoProductCoffeState.price,
            cofeId: '',
            cofeName: '',
            imagesPath: '',
            count: 0,
            prevPrice: infoProductCoffeState.price,
          }),
        );
      }
    });
  }, [basketUserState, infoProductCoffeState]);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.upConteiner}>
          {controller && (
            <Image
              source={{uri: infoProductCoffeState.imagesPath}}
              style={styles.image}
              onError={() => setController(false)}
            />
          )}
          {controller == false && (
            <Image source={imageNoCoffe} style={styles.image} />
          )}
        </View>
        <View style={styles.centerConteiner}>
          <Text style={styles.productName}>
            {infoProductCoffeState.productName}
          </Text>
          {infoProductCoffeState.favarite && (
            <Image source={heartIcon} style={styles.heartIcon} />
          )}
          {infoProductCoffeState.favarite == false && (
            <Image source={heartGrayIcon} style={styles.heartIcon} />
          )}
        </View>
        <View style={{backgroundColor: 'white', height: '100%'}}>
          <View style={styles.imageConteiner}>
            <Image source={milk} style={styles.atributeIcon} />
            <Image source={coffe} style={styles.atributeIcon} />
            <Image source={water} style={styles.atributeIcon} />
            <Image source={temperature} style={styles.atributeIcon} />
            <Image source={pressure} style={styles.atributeIcon} />
          </View>
          <View style={styles.textConteiner}>
            <Text style={[styles.textAtributes, {marginLeft: 22}]}>15мл</Text>
            <Text style={[styles.textAtributes, {marginLeft: 30}]}> 25%</Text>
            <Text style={[styles.textAtributes, {marginLeft: 32}]}>25мл</Text>
            <Text style={[styles.textAtributes, {marginLeft: 33}]}>95`</Text>
            <Text style={[styles.textAtributes, {marginLeft: 35}]}>15б</Text>
          </View>
          <View>
            <Text style={styles.textDescription}>
              {infoProductCoffeState.productName} – это бархатистая плотная
              пенка с золотистым отливом, покрывающая всю поверхность кофе. Из
              Италии с любовью.
            </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.priceConteiner}>
            <View style={styles.textPriceConteiner}>
              <Text
                style={styles.price}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {basketObjectState.price}
              </Text>
            </View>
            <Image source={rubleGray} style={styles.rubleGrayIcon} />
            {basketObjectState.count == 0 && (
              <PayButtonNormalState
                id={infoProductCoffeState.id}
                productName={infoProductCoffeState.productName}
                price={infoProductCoffeState.price}
                cofeId={infoProductCoffeState.cofeId}
                cofeName={infoProductCoffeState.cofeName}
                imagesPath={infoProductCoffeState.imagesPath}
                count={1}
                prevPrice={infoProductCoffeState.price}
              />
            )}
            {basketObjectState.count != 0 && (
              <View>
                <PayButtonActiveState idSelected={infoProductCoffeState.id} />
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  upConteiner: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 360,
  },
  image: {
    width: 260,
    height: 250,
    marginTop: 50,
  },
  productName: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    color: '#474747',
    marginLeft: 24,
  },
  centerConteiner: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  heartIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  imageConteiner: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 10,
  },
  atributeIcon: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  textConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
  },
  textAtributes: {
    fontSize: 10,
  },
  textDescription: {
    color: '#474747',
    fontSize: 20,
    fontFamily: 'Helvetica',
    marginTop: 30,
    marginLeft: 25,
    marginRight: 25,
  },
  separator: {
    marginTop: 25,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    width: 340,
    marginLeft: 24,
  },
  priceConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 24,
    marginTop: 23,
  },
  price: {
    fontSize: 30,
    color: '#6c6c6c',
    textAlign: 'center',
  },
  rubleGrayIcon: {
    marginLeft: 0,
    marginTop: 5,
    width: 16,
    height: 24,
  },
  textPriceConteiner: {
    width: 50,
    height: 35,
  },
});
