import {
  Animated,
  FlatList,
  ListRenderItem,
  LogBox,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ImageDetailComponent} from './nestedComponent/ImageDetailComponent';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {SetStateAction, useEffect, useRef, useState} from 'react';
import {
  IProductCafeModel,
  IProductFullInfo,
  IProductInfoRequest,
  useGetProductInfoMutation,
} from '../../redux/reduToolKitQuery';
import {Separator} from '../listComponent/CardFlatList/Separator';
import {CardProductsComponent} from './nestedComponent/CardProductsComponent';
import {addInfoCeffeProduct} from '../../redux/reduxStateSlice/infoProductCoffeSlice';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {WIDTH_APP } from "../../definitionSize";
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';
import {DetailProductInfoName} from '../../navigation/navigator/nameScreen';
import {StackNavigationProp} from '@react-navigation/stack';
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
  const initialProductState: Array<IProductCafeModel> = [
    {
      id: '',
      cofeId: '',
      name: '',
      price: 0,
      favorite: false,
      imagesPath: '',
    },
  ];
  const [token, setToken] = useState('');
  const [products, setProducts] = useState(initialProductState);
  useEffect(() => {
    productsCafeState.map(dataFirstObject => {
      const firstOject = Object.values(dataFirstObject);
      firstOject.map(dataSecondObject => {
        const secondObject = Object.values(dataSecondObject);

        setProducts(secondObject as SetStateAction<any>);
      });
    });
    tokenUser.data.map(data => {
      setToken(data);
    });
  }, []);
  const [getProductInfo] = useGetProductInfoMutation();
  const getInfoProductsTab = async (id: string) => {
    const result:
      | {data: IProductFullInfo}
      | {error: FetchBaseQueryError | SerializedError} = await getProductInfo({
      sessionId: token,
      productId: id,
    } as IProductInfoRequest);

    dispatch(
      // @ts-ignore
      addInfoCeffeProduct(result.data),
    );
  };
  const renderItem: ListRenderItem<IProductCafeModel> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.conteiner}
        onPress={() => {
          getInfoProductsTab(item.id);
          navigation.navigate(DetailProductInfoName);
        }}>
        <CardProductsComponent
          name={item.name}
          images={item.imagesPath}
          price={item.price}
          favorite={item.favorite}
        />
      </TouchableOpacity>
    );
  };
  const RenderFlatList = () => {
    return (
      <FlatList
        data={products}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        scrollEnabled={false}
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
    <SafeAreaView>
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT - 32}}
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
