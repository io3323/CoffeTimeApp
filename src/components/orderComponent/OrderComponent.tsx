import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ListRenderItem,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {cloneElement, useEffect, useState} from 'react';
import imageNoCoffe from '../../assets/image/detailScreen/imageNoCoffe.png';
import rubleGray from '../../assets/image/detailProductScreen/rubleGray.png';
import {SwipeListView} from 'react-native-swipe-list-view';
import {IBasketUser} from '../../redux/reduxStateSlice/basketUserSlice';
import {CardShopTransitionComponent} from './customElement/CardShopTransitionComponent';
import {HiddenEllement, ItemModel} from './customElement/HiddenEllement';
import {HEIGHT_APP} from '../../definitionSize';
export const OrderComponent = () => {
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
    setTotalPrice(totalPriceVariable);
    setTotalCount(totalCountVariable);
  }, [basketUserState]);
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
  const rowAnimatedValues: any = {};
  basketUserState.forEach(data => {
    rowAnimatedValues[`${data.id}`] = {
      rowHeight: new Animated.Value(160),
      rowFrontTranslate: new Animated.Value(1),
      rowBackWidth: new Animated.Value(100),
    };
  });
  const renderItem: ListRenderItem<IBasketUser> = data => {
    return (
      <View>
        <CardShopTransitionComponent
          id={data.item.id}
          productName={data.item.productName}
          price={data.item.price}
          cofeId={data.item.cofeId}
          cofeName={data.item.cofeName}
          imagesPath={data.item.imagesPath}
          count={data.item.count}
          prevState={data.item.prevState}
        />
      </View>
    );
  };
  const renderHiddenItem = (data: ItemModel, rowMap: any) => {
    return <HiddenEllement data={data} rowMap={rowMap} />;
  };
  return (
    <SafeAreaView>
      {controller && (
        <View style={{height: '100%'}}>
          <View style={{flex: 3}}>
            <SwipeListView
              data={basketUserState}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              renderHiddenItem={renderHiddenItem}
              disableRightSwipe={true}
              rightOpenValue={-170}
              stopRightSwipe={-201}
              swipeToOpenPercent={10}
              swipeToClosePercent={10}
              useNativeDriver={false}
              contentContainerStyle={{alignItems: 'center'}}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.totalView}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View>
                      {totalCount == 1 && (
                        <Text style={styles.totalCountsProduct}>
                          {totalCount} напиток
                        </Text>
                      )}
                      {(totalCount == 2 ||
                        totalCount == 3 ||
                        totalCount == 4) && (
                        <Text style={styles.totalCountsProduct}>
                          {totalCount} напитка
                        </Text>
                      )}
                      {totalCount != 1 &&
                        totalCount != 2 &&
                        totalCount != 3 &&
                        totalCount != 4 && (
                          <Text style={styles.totalCountsProduct}>
                            {totalCount} напитков
                          </Text>
                        )}
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={styles.totalPrice}>{totalPrice}</Text>
                      <Image source={rubleGray} style={styles.rubleGray} />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.textButton}>Оформление заказа</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
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
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'SFUIText-Light',
    color: '#FFFFFF',
  },
  imageNoCoffe: {
    width: 160,
    height: 160,
  },
  textInitialPage: {
    marginTop: 20,
    fontFamily: 'SFUIText-Light',
    fontSize: 18,
    color: '#474747',
  },
  totalView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalCountsProduct: {
    fontSize: 15,
    fontFamily: 'SFUIText-Light',
  },
  totalPrice: {
    marginLeft: -20,
    fontSize: 30,
    fontFamily: 'Lobster-Regular',
    color: '#474747',
  },
  rubleGray: {
    width: 20,
    height: 25,
    marginTop: 5,
  },
});
