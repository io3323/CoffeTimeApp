import {addInfoCeffeProduct} from '../../../redux/reduxStateSlice/infoProductCoffeSlice';
import {DetailProductInfoName} from '../../../navigation/navigator/nameScreen';
import {CardProductsComponent} from '../../detailComponent/nestedComponent/CardProductsComponent';
import {createCardProduct} from '../../../externalFunctions/detailScreen/createCardProduct';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  RootState,
  useGetProductInfoMutation,
} from '../../../redux/reduToolKitQuery';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {WIDTH_APP} from '../../../definitionSize';
import {IProductCafeModel} from '../../../redux/reduToolKitQuery/interfacesCoffeData';
import {FC} from 'react';
type FavoriteRenderModel = {
  item: IProductCafeModel;
};
export const FavoriteRenderIOS: FC<FavoriteRenderModel> = props => {
  const {id} = props.item;
  const dispatch = useDispatch();
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const [getProductInfo] = useGetProductInfoMutation();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const getInfoProductsTab = async (idInfo: string) => {
    const result = await getProductInfo({
      sessionId: tokenUser.token,
      productId: idInfo,
    });
    dispatch(addInfoCeffeProduct(result));
  };
  return (
    <TouchableOpacity
      style={styles.conteiner}
      onPress={() => {
        getInfoProductsTab(id);
        navigation.navigate(DetailProductInfoName);
      }}>
      <CardProductsComponent cardProductInfo={createCardProduct(props.item)} />
    </TouchableOpacity>
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
});
