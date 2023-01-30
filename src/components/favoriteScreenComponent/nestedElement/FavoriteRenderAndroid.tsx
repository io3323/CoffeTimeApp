import {addInfoCeffeProduct} from '../../../redux/reduxStateSlice/infoProductCoffeSlice';
import {FC} from 'react';
import {DetailProductInfoName} from '../../../navigation/navigator/nameScreen';
import {CardProductsComponent} from '../../detailComponent/nestedComponent/CardProductsComponent';
import {createCardProduct} from '../../../externalFunctions/detailScreen/createCardProduct';
import {Pressable, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {useGetProductInfoMutation} from '../../../redux/reduToolKitQuery';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IProductCafeModel} from '../../../redux/reduToolKitQuery/interfacesCoffeData';
import {WIDTH_APP} from '../../../definitionSize';
type FavoriteRenderModel = {
  item: IProductCafeModel;
};
export const FavoriteRenderAndroid: FC<FavoriteRenderModel> = props => {
  const {id} = props.item;
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const [getProductInfo] = useGetProductInfoMutation();
  const getInfoProductsTab = async (idInfo: string) => {
    const result = await getProductInfo({
      sessionId: tokenUser.token,
      productId: idInfo,
    });
    dispatch(addInfoCeffeProduct(result));
  };
  return (
    <Pressable
      android_ripple={{color: '#f4f3f4', foreground: true}}
      style={styles.conteiner}
      onPress={() => {
        getInfoProductsTab(id);
        navigation.navigate(DetailProductInfoName);
      }}>
      {id != '' && (
        <CardProductsComponent
          cardProductInfo={createCardProduct(props.item)}
        />
      )}
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
  },
});
