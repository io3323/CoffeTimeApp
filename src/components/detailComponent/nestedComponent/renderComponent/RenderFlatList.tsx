import {
  FlatList,
  ListRenderItem,
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Separator} from '../../../listComponent/Separator/Separator';
import {light} from '../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {IProductCafeModel} from '../../../../redux/reduToolKitQuery/interfacesCoffeData';
import {RenderItemAndroid} from './RenderItemAndroid';
import {RenderItemIOS} from './RenderItemIos';
import {Color} from '../../../../Color';
import {useEffect, useState} from 'react';

export const RenderFlatList = () => {
  const productsCafeState = useSelector(
    (state: RootState) => state.productsCafeState,
  );

  const globalRegSlice = useSelector(
    (state: RootState) => state.globalRegState,
  );

  const coffeDataNoRegState = useSelector(
    (state: RootState) => state.coffeDataNoRegState,
  );

  const renderItemAndroid: ListRenderItem<IProductCafeModel> = ({item}) => {
    return <RenderItemAndroid renderModel={item} />;
  };
  const renderItemIOS: ListRenderItem<IProductCafeModel> = ({item}) => {
    return <RenderItemIOS renderModel={item} />;
  };
  const themeState = useSelector((state: RootState) => state.themeState);
  const currentElement = useSelector(
    (state: RootState) => state.currentElementState,
  );

  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    if (globalRegSlice) {
      const filterElement = coffeDataNoRegState.filter(
        data => data.id === currentElement,
      );

      const index = coffeDataNoRegState.indexOf(filterElement[0]);

      console.log(index, 'index');
      setCurrentIndex(index);
    }
  }, [coffeDataNoRegState]);

  return (
    <>
      {globalRegSlice ? (
        <>
          {currentIndex != -1 && (
            <FlatList
              data={coffeDataNoRegState[currentIndex].coffeArray}
              renderItem={
                Platform.OS == 'ios' ? renderItemIOS : renderItemAndroid
              }
              ItemSeparatorComponent={Separator}
              keyExtractor={item => item.id}
              horizontal={false}
              numColumns={2}
              scrollEnabled={false}
              style={
                themeState.theme == light
                  ? styles.flatListLight
                  : styles.flatListDark
              }
            />
          )}
          {currentIndex === -1 && (
            <View>
              <Text>No</Text>
            </View>
          )}
        </>
      ) : (
        <FlatList
          data={productsCafeState}
          renderItem={Platform.OS == 'ios' ? renderItemIOS : renderItemAndroid}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={2}
          scrollEnabled={false}
          style={
            themeState.theme == light
              ? styles.flatListLight
              : styles.flatListDark
          }
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  flatListLight: {
    backgroundColor:
      Color.detailColorObject.renderFlatList.backgroundColor.light,
  },
  flatListDark: {
    backgroundColor:
      Color.detailColorObject.renderFlatList.backgroundColor.dark,
  },
});
