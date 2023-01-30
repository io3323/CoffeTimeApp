import {FlatList, ListRenderItem, Platform, StyleSheet} from 'react-native';
import {Separator} from '../../../listComponent/Separator/Separator';
import {light} from '../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {IProductCafeModel} from '../../../../redux/reduToolKitQuery/interfacesCoffeData';
import {RenderItemAndroid} from './RenderItemAndroid';
import {RenderItemIOS} from './RenderItemIos';

export const RenderFlatList = () => {
  const productsCafeState = useSelector(
    (state: RootState) => state.productsCafeState,
  );
  const renderItemAndroid: ListRenderItem<IProductCafeModel> = ({item}) => {
    return <RenderItemAndroid renderModel={item} />;
  };
  const renderItemIOS: ListRenderItem<IProductCafeModel> = ({item}) => {
    return <RenderItemIOS renderModel={item} />;
  };
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <FlatList
      data={productsCafeState}
      renderItem={Platform.OS == 'ios' ? renderItemIOS : renderItemAndroid}
      ItemSeparatorComponent={Separator}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={2}
      scrollEnabled={false}
      style={
        themeState.theme == light ? styles.flatListLight : styles.flatListDark
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListLight: {
    backgroundColor: '#f4f3f4',
  },
  flatListDark: {
    backgroundColor: '#534965',
  },
});
