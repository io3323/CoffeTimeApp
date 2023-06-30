import {Pressable, StyleSheet} from 'react-native';
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
import {Color} from '../../../../Color';
import {setProductInfoNoRegSlice} from '../../../../redux/reduxStateSlice/productInfoNoRegSlice';
type ModelRenderAndroid = {
  renderModel: IProductCafeModel;
};
export const RenderItemAndroid: FC<ModelRenderAndroid> = item => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const globalRegSlice = useSelector(
    (state: RootState) => state.globalRegState,
  );
  const [getProductInfo] = useGetProductInfoMutation();
  const getInfoProductsTab = async (id: string) => {
    if (!globalRegSlice) {
      const result = await getProductInfo({
        sessionId: tokenUser.token,
        productId: id,
      });
      dispatch(addInfoCeffeProduct(result));
    } else {
      console.log(item.renderModel.productInfo, 'ffffff');
      const result = item.renderModel.productInfo;
      console.log(result, 'res');
      if (!!result) {
        dispatch(addInfoCeffeProduct({data: result}));
        dispatch(setProductInfoNoRegSlice(result));
      }
    }
  };
  const {rippleColor} = Color.detailColorObject.renderItemAndroid;
  return (
    <Pressable
      android_ripple={{color: rippleColor, foreground: true}}
      style={styles.container}
      onPress={() => {
        getInfoProductsTab(item.renderModel.id);
        navigation.navigate(DetailProductInfoName);
      }}>
      <CardProductsComponent
        cardProductInfo={createCardProduct(item.renderModel)}
      />
    </Pressable>
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
