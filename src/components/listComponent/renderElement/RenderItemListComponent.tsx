import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {addCafeInfo} from '../../../redux/reduxStateSlice/cafeInfoSlice';
import {addProducts} from '../../../redux/reduxStateSlice/productsCafeSlice';
import {DetailedInfoName} from '../../../navigation/navigator/nameScreen';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  useGetCafeMutation,
  useGetProductsCafeMutation,
} from '../../../redux/reduToolKitQuery';
import {FC} from 'react';
import {ImageBackgroundListElement} from './element/ImageBackgroundListElement';
import {CardFlatListElement} from './element/CardFlatListElement';
export type ItemModelList = {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
};
type RenderModel = {
  renderItem: ItemModelList;
};
export const RenderItemListComponent: FC<RenderModel> = props => {
  const dispatch = useDispatch();
  const [getCafe] = useGetCafeMutation();
  const [getProductsCafe] = useGetProductsCafeMutation();
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const handleNavigation = async (idCafe: string) => {
    if (idCafe != '') {
      const cafeInfo = await getCafe({
        sessionId: tokenUser.token,
        cafeId: idCafe,
      }).unwrap();
      dispatch(addCafeInfo(cafeInfo));
      const cafeProducts = await getProductsCafe({
        sessionId: tokenUser.token,
        cafeId: idCafe,
      });
      dispatch(addProducts(cafeProducts));
    } else {
      console.log('no idCafe');
    }
    navigation.navigate(DetailedInfoName);
  };
  return (
    <TouchableOpacity
      style={styles.conteiner}
      onPress={() => {
        handleNavigation(props.renderItem.id);
      }}>
      <ImageBackgroundListElement image={props.renderItem.images} />
      <CardFlatListElement listItem={props.renderItem} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
});
