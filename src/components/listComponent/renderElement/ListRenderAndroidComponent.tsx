import {StyleSheet, Pressable, View} from 'react-native';
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
import {HEIGHT_APP} from '../../../definitionSize';
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
export const ListRenderAndroidComponent: FC<RenderModel> = props => {
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
    <Pressable
      android_ripple={{color: '#f4f3f4', foreground: true}}
      style={styles.conteiner}
      onPress={() => {
        handleNavigation(props.renderItem.id);
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: HEIGHT_APP * 0.19,
        }}>
        <ImageBackgroundListElement image={props.renderItem.images} />
        <CardFlatListElement listItem={props.renderItem} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
});
