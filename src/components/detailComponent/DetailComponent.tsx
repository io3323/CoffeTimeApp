import {
  Animated,
  FlatList,
  ListRenderItem,
  LogBox,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ImageDetailComponent} from './nestedComponent/ImageDetailComponent';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {useRef} from 'react';
import {useGetProductInfoMutation} from '../../redux/reduToolKitQuery';
import {Separator} from '../listComponent/CardFlatList/Separator';
import {CardProductsComponent} from './nestedComponent/CardProductsComponent';
import {addInfoCeffeProduct} from '../../redux/reduxStateSlice/infoProductCoffeSlice';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {WIDTH_APP} from '../../definitionSize';
import {DetailProductInfoName} from '../../navigation/navigator/nameScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import {IProductCafeModel} from '../../redux/reduToolKitQuery/interfacesCoffeData';
import {light} from '../../themeNameApp';
LogBox.ignoreLogs(['source.uri']);
const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 320;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export const DetailComponent = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });
  const cafeInfoState = useSelector((state: RootState) => state.cafeInfoState);
  const productsCafeState = useSelector(
    (state: RootState) => state.productsCafeState,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const themeState = useSelector((state: RootState) => state.themeState);
  const [getProductInfo] = useGetProductInfoMutation();
  const getInfoProductsTab = async (id: string) => {
    const result = await getProductInfo({
      sessionId: tokenUser.token,
      productId: id,
    });
    dispatch(addInfoCeffeProduct(result));
  };
  const renderItemAndroid: ListRenderItem<IProductCafeModel> = ({item}) => {
    return (
      <Pressable
        android_ripple={{color: '#f4f3f4', foreground: true}}
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
          cofeId={item.cofeId}
          favorite={item.favorite}
        />
      </Pressable>
    );
  };
  const renderItemIOS: ListRenderItem<IProductCafeModel> = ({item}) => {
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
  const RenderFlatList = () => {
    return (
      <FlatList
        data={productsCafeState}
        renderItem={Platform.OS == 'ios' ? renderItemIOS : renderItemAndroid}
        ItemSeparatorComponent={Separator}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        scrollEnabled={false}
        style={
          themeState.theme == light ? styles.flatListLight : styles.flatListDark
        }
      />
    );
  };
  const RenderHeaderItem = () => {
    return (
      <Animated.View
        style={[
          styles.headerBackground,
          {
            opacity: imageOpacity,
            transform: [{translateY: imageTranslateY}],
          },
        ]}>
        <ImageDetailComponent
          images={cafeInfoState.images}
          name={cafeInfoState.name}
          address={cafeInfoState.address}
        />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView
      style={
        themeState.theme == light
          ? styles.mainConteinerLight
          : styles.mainConteinerDark
      }>
      <Animated.ScrollView
        contentContainerStyle={
          themeState.theme == light
            ? styles.contentContainerStyleLight
            : styles.contentContainerStyleDark
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}>
        <RenderFlatList />
      </Animated.ScrollView>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerTranslateY}]}]}>
        <RenderHeaderItem />
      </Animated.View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainConteinerLight: {
    backgroundColor: '#f4f3f4',
  },
  mainConteinerDark: {
    backgroundColor: '#534965',
  },
  contentContainerStyleLight: {
    paddingTop: HEADER_MAX_HEIGHT - 32,
  },
  contentContainerStyleDark: {
    paddingTop: HEADER_MAX_HEIGHT - 32,
  },
  flatListLight: {
    backgroundColor: '#f4f3f4',
  },
  flatListDark: {
    backgroundColor: '#534965',
  },
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: WIDTH_APP * 0.45,
    height: 270,
    marginLeft: 12.5,
    backgroundColor: 'red',
  },
  saveArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: -50,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  topBar: {
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
});
