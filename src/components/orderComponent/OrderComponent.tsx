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
import {CardShop} from './customElement/CardShop';
import {useEffect, useState} from 'react';
// @ts-ignore
import imageNoCoffe from '../../assets/image/detailScreen/imageNoCoffe.png';
// @ts-ignore
import rubleGray from '../../assets/image/detailProductScreen/rubleGray.png';

export const OrderComponent = () => {
  const dispatch = useDispatch();
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const [controller, setController] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    basketUserState.map(effect => {
      if (effect.id == '') {
        setController(false);
      } else {
        setController(true);
      }
    });
  });
  useEffect(() => {
    let totalPriceVariable = 0;
    let totalCountVariable = 0;
    basketUserState.map(data => {
      totalPriceVariable = data.price + totalPriceVariable;
      totalCountVariable = data.count + totalCountVariable;
    });
    console.log(totalPriceVariable);
    setTotalPrice(totalPriceVariable);
    setTotalCount(totalCountVariable);
  }, [basketUserState]);
  const Separator = () => {
    return <View />;
  };
  const InitialPage = () => {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          marginVertical: 160,
        }}>
        <Image source={imageNoCoffe} style={styles.imageNoCoffe} />
        <View style={{marginTop: 80}}>
          <Text style={styles.textInitialPage}>
            Здесь нет ни одной чашки кофе
          </Text>
          <Text style={styles.textInitialPage}>
            Попробуйте вернуться к нам позже
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      {controller && (
        <View>
          <View style={{height: 650, borderRadius: 10}}>
            <ScrollView>
              {basketUserState.map((data, index) => (
                <View>
                  {index != 0 && (
                    <CardShop
                      id={data.id}
                      productName={data.productName}
                      price={data.price}
                      cofeId={data.cofeId}
                      cofeName={data.cofeName}
                      imagesPath={data.imagesPath}
                      count={data.count}
                      prevPrice={data.prevState}
                    />
                  )}
                  <Separator />
                </View>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 30,
            }}>
            <View style={styles.totalView}>
              <Text style={styles.totalCountsProduct}>
                {totalCount} напитка
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.totalPrice}>{totalPrice}</Text>
                <Image source={rubleGray} style={styles.rubleGray} />
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Оформление заказа</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {controller == false && <InitialPage />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'black',
    width: 300,
    height: 2,
  },
  button: {
    width: 207,
    height: 41,
    backgroundColor: '#C8D9AF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: 175,
    marginTop: -55,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
  },
  imageNoCoffe: {
    width: 160,
    height: 160,
  },
  textInitialPage: {
    marginTop: 20,
    fontFamily: 'Helvetica',
    fontSize: 18,
    color: '#474747',
  },
  totalView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 100,
    borderRadius: 15,
    marginTop: -15,
  },
  totalCountsProduct: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
  },
  totalPrice: {
    marginLeft: 10,
    fontSize: 30,
    fontFamily: 'Helvetica',
    color: '#474747',
  },
  rubleGray: {
    width: 20,
    height: 25,
    marginTop: 5,
  },
});
