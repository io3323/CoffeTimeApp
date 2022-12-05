import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
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
import {useState} from 'react';
export const DetaProductComponent = () => {
  const infoProductCoffeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  const [controller, setController] = useState(true);

  return (
    <SafeAreaView>
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
            {infoProductCoffeState.productName} – это бархатистая плотная пенка
            с золотистым отливом, покрывающая всю поверхность кофе. Из Италии с
            любовью.
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.priceConteiner}>
          <Text style={styles.price}>{infoProductCoffeState.price}</Text>
          <Image source={rubleGray} style={styles.rubleGrayIcon} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Заказать</Text>
          </TouchableOpacity>
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
    marginLeft: 42,
    marginTop: 23,
  },
  price: {
    fontSize: 30,
    color: '#6c6c6c',
  },
  rubleGrayIcon: {
    marginLeft: 10,
    marginTop: 5,
    width: 16,
    height: 24,
  },
  button: {
    width: 207,
    height: 41,
    backgroundColor: '#C8D9AF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: 60,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
  },
});
