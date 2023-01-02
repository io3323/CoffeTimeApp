import {Image, StyleSheet, Text, View} from 'react-native';
import {FunctionComponent, useState} from 'react';
import rubleIcon from '../../../assets/image/detailScreen/rubleIcon.png';
import heartGrayIcon from '../../../assets/image/detailScreen/heartGrayIcon.png';
import heartIcon from '../../../assets/image/detailScreen/heartIcon.png';
import imageNoCoffe from '../../../assets/image/detailScreen/imageNoCoffe.png';
import imageNoCoffeDark from '../../../assets/image/detailScreen/imageNoCoffeDark.png';
import {WIDTH_APP} from '../../../definitionSize';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import rubleIconDark from '../../../assets/image/detailScreen/rubleIconDark.png';
type CartProductsType = {
  name: string;
  images: string;
  price: number;
  favorite: boolean;
};
export const CardProductsComponent: FunctionComponent<CartProductsType> = ({
  name,
  images,
  price,
  favorite,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const [controller, setController] = useState(true);
  return (
    <View
      style={
        themeState.theme == light ? styles.conteinerLight : styles.conteinerDark
      }>
      <View style={styles.textConteiner}>
        <Text
          style={
            themeState.theme == light ? styles.nameLight : styles.nameDark
          }>
          {name}
        </Text>
        <Text
          style={
            themeState.theme == light ? styles.fraseLight : styles.fraseDark
          }>
          кофейный напиток
        </Text>
      </View>
      <View>
        <View style={styles.imageConteiner}>
          {controller && (
            <Image
              source={{uri: images}}
              style={styles.imageLight}
              onError={() => setController(false)}
            />
          )}
        </View>
        <View style={styles.imageConteiner}>
          {controller == false && (
            <Image
              source={
                themeState.theme == light ? imageNoCoffe : imageNoCoffeDark
              }
              style={
                themeState.theme == light ? styles.imageLight : styles.imageDark
              }
            />
          )}
        </View>
      </View>
      <View style={styles.secondConteiner}>
        <View style={styles.priceConteiner}>
          <Text
            style={
              themeState.theme == light ? styles.priceLight : styles.priceDark
            }>
            {price}
          </Text>
          <Image
            source={themeState.theme == light ? rubleIcon : rubleIconDark}
            style={
              themeState.theme == light
                ? styles.rubleIconLight
                : styles.rubleIconDark
            }
          />
        </View>
        {favorite && <Image source={heartIcon} style={styles.heartIcon} />}
        {favorite == false && (
          <Image source={heartGrayIcon} style={styles.heartIcon} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteinerLight: {
    width: WIDTH_APP * 0.45,
    height: 270,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  conteinerDark: {
    width: WIDTH_APP * 0.45,
    height: 270,
    backgroundColor: '#3a3450',
    justifyContent: 'space-between',
  },
  nameLight: {
    fontSize: 18,
    fontFamily: 'SFUIText-Bold',
    color: '#717171',
    marginTop: 10,
    marginLeft: 10,
  },
  nameDark: {
    fontSize: 18,
    fontFamily: 'SFUIText-Bold',
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
  },
  fraseLight: {
    fontSize: 14,
    fontFamily: 'SFUIText-Regular',
    color: '#717171',
    marginTop: 5,
    marginLeft: 10,
  },
  fraseDark: {
    fontSize: 14,
    fontFamily: 'SFUIText-Regular',
    color: 'white',
    marginTop: 5,
    marginLeft: 10,
  },
  imageConteiner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLight: {
    width: 150,
    height: 135,
  },
  imageDark: {
    width: 130,
    height: 130,
  },
  secondConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceConteiner: {
    flexDirection: 'row',
  },
  priceLight: {
    fontSize: 25,
    color: '#C8D9AF',
    fontFamily: 'Lobster-Regular',
    marginLeft: 8,
    marginBottom: 8,
  },
  priceDark: {
    fontSize: 25,
    color: '#bbb8ee',
    fontFamily: 'Lobster-Regular',
    marginLeft: 8,
    marginBottom: 8,
  },
  rubleIconLight: {
    width: 12,
    height: 19,
    marginTop: 6,
    marginLeft: 8,
  },
  rubleIconDark: {
    width: 22,
    height: 29,
    marginTop: 2,
    marginLeft: 4,
  },
  heartIcon: {
    marginRight: 8,
    marginBottom: 12,
    width: 30,
    height: 30,
  },
  textConteiner: {
    width: '100%',
    height: 65,
  },
});
