import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FunctionComponent} from 'react';
import rubleIcon from '../../../assets/image/detailScreen/rubleIcon.png';
import heartGrayIcon from '../../../assets/image/detailScreen/heartGrayIcon.png';
import heartIcon from '../../../assets/image/detailScreen/heartIcon.png';
import imageNoCoffe from '../../../assets/image/detailScreen/imageNoCoffe.png';
import imageNoCoffeDark from '../../../assets/image/detailScreen/imageNoCoffeDark.png';
import {WIDTH_APP} from '../../../definitionSize';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import rubleIconDark from '../../../assets/image/detailScreen/rubleIconDark.png';
import {addFavoriteProduct} from '../../../redux/reduxStateSlice/favoriteProductSlice';
import {updateIncludeFunction} from '../../../externalFunctions/favoriteScreen/updateIncludeFunction';
import {useTranslation} from 'react-i18next';
import {IProductCafeModel} from '../../../redux/reduToolKitQuery/interfacesCoffeData';
type CardProductType = {
  cardProductInfo: IProductCafeModel;
};
export const CardProductsComponent: FunctionComponent<
  CardProductType
> = props => {
  const {id, name, imagesPath, price, cofeId, favorite} = props.cardProductInfo;
  const themeState = useSelector((state: RootState) => state.themeState);
  const disatch = useDispatch();
  const favoriteProductState = useSelector(
    (state: RootState) => state.favoriteProductState,
  );
  const {t} = useTranslation();
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
          {t('common:detailScreen:description')}
        </Text>
      </View>
      <ImageBackground
        style={themeState.theme == light ? styles.imageLight : styles.imageDark}
        source={themeState.theme == light ? imageNoCoffe : imageNoCoffeDark}>
        <View style={styles.imageConteiner}>
          <Image source={{uri: imagesPath}} style={styles.imageLight} />
        </View>
      </ImageBackground>
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
        <TouchableOpacity
          onPress={() => {
            disatch(
              addFavoriteProduct({
                id: id,
                name: name,
                imagesPath: imagesPath,
                price: price,
                favorite: favorite,
                cofeId: cofeId,
              }),
            );
          }}>
          {!updateIncludeFunction(id, favoriteProductState) && (
            <Image source={heartGrayIcon} style={styles.heartIconNotActive} />
          )}
          {updateIncludeFunction(id, favoriteProductState) && (
            <Image source={heartIcon} style={styles.heartIconActive} />
          )}
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  conteinerDark: {
    width: WIDTH_APP * 0.45,
    height: 270,
    backgroundColor: '#3a3450',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: '100%',
    height: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceConteiner: {
    flexDirection: 'row',
    marginBottom: 8,
    marginLeft: 8,
  },
  priceLight: {
    fontSize: 25,
    color: '#C8D9AF',
    fontFamily: 'Lobster-Regular',
  },
  priceDark: {
    fontSize: 25,
    color: '#bbb8ee',
    fontFamily: 'Lobster-Regular',
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
  heartIconNotActive: {
    marginRight: 8,
    marginBottom: 12,
    width: 30,
    height: 30,
  },
  heartIconActive: {
    marginRight: 11,
    marginBottom: 16,
    width: 22,
    height: 20,
  },
  textConteiner: {
    width: '100%',
    height: 65,
  },
});
