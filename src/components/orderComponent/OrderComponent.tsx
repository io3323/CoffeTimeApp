import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ListRenderItem,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {useEffect, useState} from 'react';
import imageNoCoffe from '../../assets/image/detailScreen/imageNoCoffe.png';
import rubleGray from '../../assets/image/detailProductScreen/rubleGray.png';
import rubleDark from '../../assets/image/detailScreen/rubleIconDark.png';
import {SwipeListView} from 'react-native-swipe-list-view';
import {IBasketUser} from '../../redux/reduxStateSlice/basketUserSlice';
import {CardShopTransitionComponent} from './customElement/CardShopTransitionComponent';
import {HiddenEllement, ItemModel} from './customElement/HiddenEllement';
import {light} from '../../themeNameApp';
import {useTranslation} from 'react-i18next';
export const OrderComponent = () => {
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  useSelector((state: RootState) => state.localisationState);
  const themeState = useSelector((state: RootState) => state.themeState);
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
  const {t} = useTranslation();
  const InitialPage = () => {
    return (
      <View style={styles.mainInitialConteiner}>
        <Image source={imageNoCoffe} style={styles.imageNoCoffe} />
        <View style={styles.initialView}>
          <Text
            style={
              themeState.theme == light
                ? styles.textInitialPageLight
                : styles.textInitialPageDark
            }>
            {t('common:orderScreen:initialLabelUp')}
          </Text>
          <Text
            style={
              themeState.theme == light
                ? styles.textInitialPageLight
                : styles.textInitialPageDark
            }>
            {t('common:orderScreen:initialLabelDawn')}
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
    <SafeAreaView
      style={
        themeState.theme == light
          ? styles.safeAreaConteinerLight
          : styles.safeAreaConteinerDark
      }>
      {controller && (
        <View style={styles.mainConteiner}>
          <View style={styles.collectingContainer}>
            <SwipeListView
              data={basketUserState}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              renderHiddenItem={renderHiddenItem}
              disableRightSwipe={true}
              rightOpenValue={-180}
              stopRightSwipe={-201}
              swipeToOpenPercent={10}
              swipeToClosePercent={10}
              useNativeDriver={false}
              contentContainerStyle={{alignItems: 'center'}}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={styles.mainConteinerBottom}>
            <View style={styles.collectingBottomConteiner}>
              <View
                style={
                  themeState.theme == light
                    ? styles.totalViewLight
                    : styles.totalViewDark
                }>
                <View style={styles.generalConteiner}>
                  <View style={styles.priceAndCountConteiner}>
                    <View>
                      {totalCount == 1 && (
                        <Text
                          style={
                            themeState.theme == light
                              ? styles.totalCountsProductLight
                              : styles.totalCountsProductDark
                          }>
                          {totalCount} {t('common:orderScreen:drinkCount')}
                        </Text>
                      )}
                      {(totalCount == 2 ||
                        totalCount == 3 ||
                        totalCount == 4) && (
                        <Text
                          style={
                            themeState.theme == light
                              ? styles.totalCountsProductLight
                              : styles.totalCountsProductDark
                          }>
                          {totalCount} {t('common:orderScreen:drinkCountV2')}
                        </Text>
                      )}
                      {totalCount != 1 &&
                        totalCount != 2 &&
                        totalCount != 3 &&
                        totalCount != 4 && (
                          <Text
                            style={
                              themeState.theme == light
                                ? styles.totalCountsProductLight
                                : styles.totalCountsProductDark
                            }>
                            {totalCount} {t('common:orderScreen:drinksCount')}
                          </Text>
                        )}
                    </View>
                    <View style={styles.priceConteiner}>
                      <Text
                        style={
                          themeState.theme == light
                            ? styles.totalPriceLight
                            : styles.totalPriceDark
                        }>
                        {totalPrice}
                      </Text>
                      <Image
                        source={
                          themeState.theme == light ? rubleGray : rubleDark
                        }
                        style={
                          themeState.theme == light
                            ? styles.rubleGray
                            : styles.rubleDark
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.buttonConteiner}>
                    <TouchableOpacity
                      style={
                        themeState.theme == light
                          ? styles.buttonLight
                          : styles.buttonDark
                      }>
                      <Text style={styles.textButton}>
                        {t('common:orderScreen:button')}
                      </Text>
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
  safeAreaConteinerDark: {
    backgroundColor: '#534965',
  },
  safeAreaConteinerLight: {},
  mainInitialConteiner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginVertical: 160,
  },
  initialView: {marginTop: 80},
  mainConteiner: {
    height: '100%',
  },
  collectingContainer: {flex: 4},
  separator: {
    backgroundColor: 'black',
    width: 300,
    height: 2,
  },
  mainConteinerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  collectingBottomConteiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalConteiner: {flexDirection: 'row'},
  priceAndCountConteiner: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceConteiner: {display: 'flex', flexDirection: 'row'},
  buttonConteiner: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLight: {
    width: 207,
    height: 41,
    backgroundColor: '#C8D9AF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  buttonDark: {
    width: 207,
    height: 41,
    backgroundColor: '#bbb8ee',
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
  textInitialPageLight: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'SFUIText-Light',
    fontSize: 18,
    color: '#474747',
  },
  textInitialPageDark: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'SFUIText-Light',
    fontSize: 18,
    color: 'white',
  },
  totalViewLight: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalViewDark: {
    backgroundColor: '#6f6483',
    width: '100%',
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalCountsProductLight: {
    fontSize: 15,
    fontFamily: 'SFUIText-Light',
  },
  totalCountsProductDark: {
    fontSize: 15,
    fontFamily: 'SFUIText-Light',
    color: 'white',
  },
  totalPriceLight: {
    marginLeft: -20,
    fontSize: 30,
    fontFamily: 'Lobster-Regular',
    color: '#474747',
  },
  totalPriceDark: {
    marginLeft: -20,
    fontSize: 30,
    fontFamily: 'Lobster-Regular',
    color: '#bbb8ee',
  },
  rubleGray: {
    width: 20,
    height: 25,
    marginTop: 6,
    marginLeft: 5,
  },
  rubleDark: {
    width: 30,
    height: 35,
    marginTop: 1,
    marginLeft: 5,
  },
});
