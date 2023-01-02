import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import heartIcon from '../../assets/image/detailScreen/heartIcon.png';
import heartGrayIcon from '../../assets/image/detailScreen/heartGrayIcon.png';
import milk from '../../assets/image/detailProductScreen/milk.png';
import coffe from '../../assets/image/detailProductScreen/coffe.png';
import pressure from '../../assets/image/detailProductScreen/pressure.png';
import temperature from '../../assets/image/detailProductScreen/temperature.png';
import water from '../../assets/image/detailProductScreen/water.png';
import rubleGray from '../../assets/image/detailProductScreen/rubleGray.png';
import imageNoCoffe from '../../assets/image/detailScreen/imageNoCoffe.png';
import imageNoCoffeDark from '../../assets/image/detailScreen/imageNoCoffeDark.png';
import rubleIconDark from '../../assets/image/detailScreen/rubleIconDark.png';
import {useEffect, useState} from 'react';
import {PayButtonNormalState} from './customElement/PayButtonNormalState';
import {PayButtonActiveState} from './customElement/PayButtonActiveState';
import {addBacketObject} from '../../redux/reduxStateSlice/basketObjectSlice';
import {HEIGHT_APP} from '../../definitionSize';
import {ru} from '../../localisationLanguageName';
import {
  descriptionProductDetailENG,
  descriptionProductDetailRU,
} from '../../localisationScreen/DetailProductScreenLocal';
import {light} from '../../themeNameApp';
export const DetailProductComponent = () => {
  const infoProductCoffeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  const [controller, setController] = useState(true);
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const dispatch = useDispatch();
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  useEffect(() => {
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
    <SafeAreaView
      style={
        themeState.theme == light
          ? styles.safeAreaConteinerLight
          : styles.safeAreaConteinerDark
      }>
      <View
        style={
          themeState.theme == light
            ? styles.mainConteinerLight
            : styles.mainConteinerDark
        }>
        <View style={styles.upGlobalConteiner}>
          <View style={styles.upConteiner}>
            {controller && (
              <Image
                source={{uri: infoProductCoffeState.imagesPath}}
                style={styles.imageLight}
                onError={() => setController(false)}
              />
            )}
            {controller == false && (
              <Image
                source={
                  themeState.theme == light ? imageNoCoffe : imageNoCoffeDark
                }
                style={
                  themeState.theme == light
                    ? styles.imageLight
                    : styles.imageDark
                }
              />
            )}
          </View>
          <View style={styles.centerConteiner}>
            <Text
              style={
                themeState.theme == light
                  ? styles.productNameLight
                  : styles.productNameDark
              }>
              {infoProductCoffeState.productName}
            </Text>
            {infoProductCoffeState.favarite && (
              <Image source={heartIcon} style={styles.heartIcon} />
            )}
            {infoProductCoffeState.favarite == false && (
              <Image source={heartGrayIcon} style={styles.heartIcon} />
            )}
          </View>
          <View>
            <View>
              <View style={[styles.imageConteiner]}>
                <Image source={milk} style={styles.atributeIconMilk} />
                <Image source={coffe} style={styles.atributeIconCoffe} />
                <Image source={water} style={styles.atributeIconWater} />
                <Image
                  source={temperature}
                  style={styles.atributeIconTemperature}
                />
                <Image source={pressure} style={styles.atributeIconBar} />
              </View>
              <View style={[styles.textConteiner]}>
                <View style={styles.textConteinerMilk}>
                  <Text
                    style={[
                      themeState.theme == light
                        ? styles.textAtributesMilkLight
                        : styles.textAtributesMilkDark,
                    ]}>
                    15мл
                  </Text>
                </View>
                <View style={styles.textConteinerCoffe}>
                  <Text
                    style={[
                      themeState.theme == light
                        ? styles.textAtributesCoffeLight
                        : styles.textAtributesCoffeDark,
                    ]}>
                    {' '}
                    25%
                  </Text>
                </View>
                <View style={styles.textConteinerWater}>
                  <Text
                    style={[
                      themeState.theme == light
                        ? styles.textAtributesWaterLight
                        : styles.textAtributesWaterDark,
                    ]}>
                    25мл
                  </Text>
                </View>
                <View style={styles.textConteinerTemperature}>
                  <Text
                    style={[
                      themeState.theme == light
                        ? styles.textAtributesTemperatureLight
                        : styles.textAtributesTemperatureDark,
                    ]}>
                    95`
                  </Text>
                </View>
                <View style={styles.textConteinerPression}>
                  <Text
                    style={[
                      themeState.theme == light
                        ? styles.textAtributesPressionLight
                        : styles.textAtributesPressionDark,
                    ]}>
                    15б
                  </Text>
                </View>
              </View>
              <View style={styles.textDescriptionConteiner}>
                <Text
                  style={
                    themeState.theme == light
                      ? styles.textDescriptionLight
                      : styles.textDescriptionDark
                  }>
                  {infoProductCoffeState.productName} –{' '}
                  {localisationState.local == ru
                    ? descriptionProductDetailRU
                    : descriptionProductDetailENG}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={
            themeState.theme == light
              ? styles.bottomConteinerLight
              : styles.bottomConteinerDark
          }>
          <View
            style={
              themeState.theme == light
                ? styles.separatorLight
                : styles.separatorDark
            }
          />
          <View style={styles.priceConteiner}>
            <View style={styles.textPriceConteiner}>
              <Text
                style={
                  themeState.theme == light
                    ? styles.priceLight
                    : styles.priceDark
                }
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {basketObjectState.price}
              </Text>
            </View>
            <Image
              source={themeState.theme == light ? rubleGray : rubleIconDark}
              style={
                themeState.theme == light
                  ? styles.rubleGrayIconLight
                  : styles.rubleGrayIconDark
              }
            />
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
                <PayButtonActiveState />
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaConteinerLight: {backgroundColor: 'white'},
  safeAreaConteinerDark: {backgroundColor: '#534965'},
  mainConteinerLight: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  mainConteinerDark: {
    height: '100%',
    backgroundColor: '#534965',
    alignItems: 'center',
  },
  upGlobalConteiner: {
    flex: 6,
    marginLeft: '3%',
    marginRight: '3%',
  },
  upConteiner: {
    alignItems: 'center',
    height: HEIGHT_APP * 0.35,
    justifyContent: 'center',
  },
  imageLight: {
    width: '80%',
    height: '90%',
  },
  imageDark: {
    width: '68%',
    height: '80%',
  },
  productNameLight: {
    fontSize: 24,
    fontFamily: 'Lobster-Regular',
    color: '#474747',
  },
  productNameDark: {
    fontSize: 24,
    fontFamily: 'Lobster-Regular',
    color: 'white',
  },
  centerConteiner: {
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
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  atributeIconMilk: {
    width: 40,
    height: 40,
  },
  textConteinerCoffe: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  atributeIconCoffe: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  textConteinerWater: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  atributeIconWater: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  textConteinerTemperature: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  atributeIconTemperature: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  textConteinerPression: {
    width: 40,
    marginLeft: 15,
    alignItems: 'center',
  },
  atributeIconBar: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  textConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  textConteinerMilk: {
    width: 40,
    alignItems: 'center',
  },
  textAtributesMilkLight: {
    fontSize: 10,
    color: '#474747',
  },
  textAtributesMilkDark: {
    fontSize: 10,
    color: 'white',
  },
  textAtributesCoffeLight: {
    fontSize: 10,
    color: '#474747',
  },
  textAtributesCoffeDark: {
    fontSize: 10,
    color: 'white',
  },
  textAtributesWaterLight: {
    fontSize: 10,
    color: '#474747',
  },
  textAtributesWaterDark: {
    fontSize: 10,
    color: 'white',
  },
  textAtributesTemperatureLight: {
    fontSize: 10,
    color: '#474747',
  },
  textAtributesTemperatureDark: {
    fontSize: 10,
    color: 'white',
  },
  textAtributesPressionLight: {
    fontSize: 10,
    color: '#474747',
  },
  textAtributesPressionDark: {
    fontSize: 10,
    color: 'white',
  },
  textDescriptionConteiner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: HEIGHT_APP * 0.2,
  },
  textDescriptionLight: {
    color: '#474747',
    fontSize: HEIGHT_APP * 0.023,
    fontFamily: 'SFUIText-Light',
  },
  textDescriptionDark: {
    color: 'white',
    fontSize: HEIGHT_APP * 0.023,
    fontFamily: 'SFUIText-Light',
  },
  separatorLight: {
    borderColor: '#D8D8D8',
    borderWidth: 1,
    width: 340,
  },
  separatorDark: {
    borderColor: 'white',
    borderWidth: 1,
    width: 340,
  },
  priceConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '3.1%',
    marginTop: '2.8%',
  },
  priceLight: {
    fontSize: 30,
    color: '#6c6c6c',
    textAlign: 'center',
  },
  priceDark: {
    fontSize: 30,
    color: '#bbb8ee',
    textAlign: 'center',
  },
  rubleGrayIconLight: {
    marginTop: 5,
    width: 16,
    height: 24,
  },
  rubleGrayIconDark: {
    width: 20,
    height: 34,
  },
  textPriceConteiner: {
    width: 50,
    height: 35,
  },
  bottomConteinerLight: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: '100%',
    flex: 1.5,
  },
  bottomConteinerDark: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#534965',
    width: '100%',
    flex: 1.5,
  },
});
