import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useState} from 'react';
import {RootState} from '../../redux/reduxStore/store';
import {useGetCoffeMutation} from '../../redux/reduToolKitQuery';
import {addDataCoffe} from '../../redux/reduxStateSlice/dataSlice';
import {
  FlatList,
  ListRenderItem,
  LogBox,
  Platform,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {Separator} from './Separator/Separator';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {light} from '../../themeNameApp';
import {colorFlatListObject} from './colorFlatListObject';
import {
  ItemModelList,
  ListRenderIOSComponent,
} from './renderElement/ListRenderIOSComponent';
import {ListRenderAndroidComponent} from './renderElement/ListRenderAndroidComponent';
LogBox.ignoreLogs(['source.uri']);
export const ListComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const progress = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  const coffeDataState = useSelector(
    (state: RootState) => state.coffeDataState,
  );
  const [getCoffe] = useGetCoffeMutation();
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout: number) => {
    setTimeout(() => setRefreshing(false), timeout);
  };
  const dispatch = useDispatch();
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const onRefresh = useCallback(() => {
    getDataOnPress();
    setRefreshing(true);
    wait(1000);
  }, []);
  const getDataOnPress = async () => {
    const result = await getCoffe(JSON.stringify(tokenUser.token));
    dispatch(addDataCoffe(result));
  };
  const rStyleMainCont = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1],
      [
        colorFlatListObject.mainConteinerLightBack,
        colorFlatListObject.mainConteinerDarkBack,
      ],
    );
    return {
      backgroundColor: background,
    };
  });
  const renderItem: ListRenderItem<ItemModelList> = ({item}) => {
    return Platform.OS == 'ios' ? (
      <ListRenderIOSComponent renderItem={item} />
    ) : (
      <ListRenderAndroidComponent renderItem={item} />
    );
  };
  return (
    <Animated.View style={rStyleMainCont}>
      <FlatList
        data={coffeDataState}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatListStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {height: '100%'},
});
