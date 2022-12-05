import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ImageDetailComponent} from './nestedComponent/ImageDetailComponent';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {useEffect, useState} from 'react';
import {
  IProductCafeModel,
  IProductInfoRequest,
  useGetProductInfoMutation,
} from '../../redux/reduToolKitQuery';
import {Separator} from '../listComponent/CardFlatList/Separator';
import {CardProductsComponent} from './nestedComponent/CardProductsComponent';
import {addInfoCeffeProduct} from '../../redux/reduxStateSlice/infoProductCoffeSlice';
import {useNavigation} from '@react-navigation/native';
export const DetailComponent = () => {
  const cafeInfoState = useSelector((state: RootState) => state.cafeInfoState);
  const productsCafeState = useSelector(
    (state: RootState) => state.productsCafeState,
  );
  const infoProductCoffeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
        // @ts-ignore
        setProducts(secondObject);
      });
    });
    tokenUser.data.map(data => {
      setToken(data);
    });
  }, []);
  const [getProductInfo] = useGetProductInfoMutation();
  const getInfoProductsTab = async (id: string) => {
    const result = await getProductInfo({
      sessionId: token,
      productId: id,
    } as IProductInfoRequest);

    // @ts-ignore
    dispatch(addInfoCeffeProduct(result.data));
  };
  const renderItem: ListRenderItem<IProductCafeModel> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.conteiner}
        onPress={() => {
          getInfoProductsTab(item.id);
          // @ts-ignore
          navigation.navigate('DetailProductInfo');
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
  return (
    <SafeAreaView>
      <View>
        {cafeInfoState.map(data => (
          <View>
            <ImageDetailComponent
              images={data.images}
              name={data.name}
              address={data.address}
            />
          </View>
        ))}
        <FlatList
          data={products}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 180,
    height: 270,
    marginLeft: 10,
  },
});
