import {
  FlatList,
  ListRenderItem,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {IProductCafeModel} from '../../redux/reduToolKitQuery/interfacesCoffeData';
import {useGetProductInfoMutation} from '../../redux/reduToolKitQuery';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {addInfoCeffeProduct} from '../../redux/reduxStateSlice/infoProductCoffeSlice';
import {DetailProductInfoName} from '../../navigation/navigator/nameScreen';
import {CardProductsComponent} from '../detailComponent/nestedComponent/CardProductsComponent';
import {WIDTH_APP} from '../../definitionSize';
import {Separator} from '../listComponent/CardFlatList/Separator';
import {useEffect} from 'react';
import {cloneMassive} from '../../redux/reduxStateSlice/favoriteScreenSlice';
import {HeaderComponent} from './nestedElement/HeaderComponent';
import {FooterComponent} from './nestedElement/FooterComponent';
import {BackgroundComponent} from './nestedElement/BackgroundComponent';
import {light} from '../../themeNameApp';

export const FavoriteComponent = () => {
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const favoriteScreenState = useSelector(
    (state: RootState) => state.favoriteScreenState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  const [getProductInfo] = useGetProductInfoMutation();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const favoriteProductState = useSelector(
    (state: RootState) => state.favoriteProductState,
  );
  useEffect(() => {
    dispatch(cloneMassive(favoriteProductState));
  }, [favoriteProductState]);
  const favoriteRenderAndroid: ListRenderItem<IProductCafeModel> = ({item}) => {
    const getInfoProductsTab = async (id: string) => {
      const result = await getProductInfo({
        sessionId: tokenUser.token,
        productId: id,
      });
      dispatch(addInfoCeffeProduct(result));
    };
    return (
      <Pressable
        android_ripple={{color: '#f4f3f4', foreground: true}}
        style={styles.conteiner}
        onPress={() => {
          getInfoProductsTab(item.id);
          navigation.navigate(DetailProductInfoName);
        }}>
        {item.id != '' && (
          <CardProductsComponent
            id={item.id}
            name={item.name}
            images={item.imagesPath}
            price={item.price}
            cofeId={item.cofeId}
            favorite={item.favorite}
          />
        )}
      </Pressable>
    );
  };
  const favoriteRenderIOS: ListRenderItem<IProductCafeModel> = ({item}) => {
    const getInfoProductsTab = async (id: string) => {
      const result = await getProductInfo({
        sessionId: tokenUser.token,
        productId: id,
      });
      dispatch(addInfoCeffeProduct(result));
    };
    return (
      <TouchableOpacity
        style={styles.conteiner}
        onPress={() => {
          getInfoProductsTab(item.id);
          navigation.navigate(DetailProductInfoName);
        }}>
        <CardProductsComponent
          id={item.id}
          name={item.name}
          images={item.imagesPath}
          price={item.price}
          favorite={item.favorite}
          cofeId={item.cofeId}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={[
        styles.mainConteiner,
        themeState.theme == light ? styles.colorLight : styles.colorDark,
      ]}>
      {favoriteScreenState.length == 0 && <BackgroundComponent />}
      {favoriteScreenState.length > 0 && (
        <FlatList
          data={favoriteScreenState}
          renderItem={
            Platform.OS === 'ios' ? favoriteRenderIOS : favoriteRenderAndroid
          }
          horizontal={false}
          numColumns={2}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={HeaderComponent}
          ListFooterComponent={FooterComponent}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: WIDTH_APP * 0.45,
    height: 270,
    marginLeft: 12.5,
  },
  mainConteiner: {
    width: '100%',
    height: '100%',
  },
  colorLight: {
    backgroundColor: '#f2f2f2',
  },
  colorDark: {
    backgroundColor: '#534965',
  },
});
