import {ListRenderItem, StyleSheet, TouchableOpacity} from 'react-native';
import {IProductCafeModel} from '../../../../redux/reduToolKitQuery/interfacesCoffeData';
import {DetailProductInfoName} from '../../../../navigation/navigator/nameScreen';
import {CardProductsComponent} from '../CardProductsComponent';
import {createCardProduct} from '../../../../externalFunctions/detailScreen/createCardProduct';
import {WIDTH_APP} from '../../../../definitionSize';
import {
  RootState,
  useGetProductInfoMutation,
} from '../../../../redux/reduToolKitQuery';
import {addInfoCeffeProduct} from '../../../../redux/reduxStateSlice/infoProductCoffeSlice';
import {useDispatch, useSelector} from 'react-redux';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FC} from 'react';
type ModelRenderIOS = {
  renderModel: IProductCafeModel;
};
export const RenderItemIOS: FC<ModelRenderIOS> = item => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const [getProductInfo] = useGetProductInfoMutation();
  const getInfoProductsTab = async (id: string) => {
    const result = await getProductInfo({
      sessionId: tokenUser.token,
      productId: id,
    });
    dispatch(addInfoCeffeProduct(result));
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        getInfoProductsTab(item.renderModel.id);
        navigation.navigate(DetailProductInfoName);
      }}>
      <CardProductsComponent
        cardProductInfo={createCardProduct(item.renderModel)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: WIDTH_APP * 0.45,
    height: 270,
    marginLeft: 12.5,
  },
});
