import {ListRenderItem, Pressable, StyleSheet} from 'react-native';
import {IProductCafeModel} from '../../../redux/reduToolKitQuery/interfacesCoffeData';
import {DetailProductInfoName} from '../../../navigation/navigator/nameScreen';
import {CardProductsComponent} from '../../detailComponent/nestedComponent/CardProductsComponent';
import {WIDTH_APP} from '../../../definitionSize';
import {
  RootState,
  useGetProductInfoMutation,
} from '../../../redux/reduToolKitQuery';
import {addInfoCeffeProduct} from '../../../redux/reduxStateSlice/infoProductCoffeSlice';
import {useDispatch, useSelector} from 'react-redux';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
export const FavoriteRenderAndroid: ListRenderItem<IProductCafeModel> = ({
  item,
}) => {
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const [getProductInfo] = useGetProductInfoMutation();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
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
});
