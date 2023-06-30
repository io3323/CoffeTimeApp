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
import {Color} from '../../../Color';
import {setCurrentElement} from '../../../redux/reduxStateSlice/currentElementSlice';
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
  const globalRegSlice = useSelector(
    (state: RootState) => state.globalRegState,
  );
  const coffeDataNoRegState = useSelector(
    (state: RootState) => state.coffeDataNoRegState,
  );

  console.log(coffeDataNoRegState, 'cccc');
  const handleNavigation = async (idCafe: string) => {
    if (!globalRegSlice) {
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
        console.log(cafeProducts, 'cafeProducts');
        dispatch(addProducts(cafeProducts));
      } else {
        console.log('no idCafe');
      }
      navigation.navigate(DetailedInfoName);
    } else {
      dispatch(setCurrentElement(idCafe));
      navigation.navigate(DetailedInfoName);
    }
  };
  const {rippleColor} = Color.listColorObject.listRenderAndroid;
  return (
    <Pressable
      android_ripple={{color: rippleColor, foreground: true}}
      style={styles.container}
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
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
});
