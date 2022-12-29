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
import {useEffect, useState} from 'react';
import {PayButtonNormalState} from './customElement/PayButtonNormalState';
import {PayButtonActiveState} from './customElement/PayButtonActiveState';
import {addBacketObject} from '../../redux/reduxStateSlice/basketObjectSlice';
import {HEIGHT_APP} from '../../definitionSize';
export const DetailProductComponent = () => {
  const infoProductCoffeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  const [controller, setController] = useState(true);
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const dispatch = useDispatch();
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
    <SafeAreaView style={styles.safeAreaConteiner}>
      <View style={styles.mainConteiner}>
        <View style={styles.upGlobalConteiner}>
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
                <View
                  style={{
                    width: 40,
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.textAtributesMilk]}>15мл</Text>
                </View>
                <View
                  style={{
                    width: 40,
                    marginLeft: 15,
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.textAtributesCoffe]}> 25%</Text>
                </View>
                <View
                  style={{
                    width: 40,
                    marginLeft: 15,
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.textAtributesWater]}>25мл</Text>
                </View>
                <View
                  style={{
                    width: 40,
                    marginLeft: 15,
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.textAtributesTemperature]}>95`</Text>
                </View>
                <View
                  style={{
                    width: 40,
                    marginLeft: 15,
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.textAtributesPression]}>15б</Text>
                </View>
              </View>
              <View style={styles.textDescriptionConteiner}>
                <Text style={styles.textDescription}>
                  {infoProductCoffeState.productName} – это бархатистая плотная
                  пенка с золотистым отливом, покрывающая всю поверхность кофе.
                  Из Италии с любовью.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomConteiner}>
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
  safeAreaConteiner: {backgroundColor: 'white'},
  mainConteiner: {
    height: '100%',
    backgroundColor: 'white',
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
  image: {
    width: '80%',
    height: '90%',
  },
  productName: {
    fontSize: 24,
    fontFamily: 'Lobster-Regular',
    color: '#474747',
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
  atributeIconCoffe: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  atributeIconWater: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  atributeIconTemperature: {
    width: 40,
    height: 40,
    marginLeft: 15,
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
  textAtributesMilk: {
    fontSize: 10,
  },
  textAtributesCoffe: {
    fontSize: 10,
  },
  textAtributesWater: {
    fontSize: 10,
  },
  textAtributesTemperature: {
    fontSize: 10,
  },
  textAtributesPression: {
    fontSize: 10,
  },
  textDescriptionConteiner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: HEIGHT_APP * 0.2,
  },
  textDescription: {
    color: '#474747',
    fontSize: HEIGHT_APP * 0.023,
    fontFamily: 'SFUIText-Light',
  },
  separator: {
    borderColor: '#D8D8D8',
    borderWidth: 1,
    width: 340,
  },
  priceConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '3.1%',
    marginTop: '2.8%',
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
  bottomConteiner: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: '100%',
    flex: 1.5,
  },
});
