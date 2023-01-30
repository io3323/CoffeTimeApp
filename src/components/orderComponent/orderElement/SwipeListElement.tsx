import {SwipeListView} from 'react-native-swipe-list-view';
import {ListRenderItem, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {IBasketUser} from '../../../redux/reduxStateSlice/basketUserSlice';
import {HiddenEllement, ItemModel} from './renderElement/HiddenEllement';
import {RenderItemSwipeList} from './renderElement/RenderItemSwipeList';

export const SwipeListElement = () => {
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const renderItem: ListRenderItem<IBasketUser> = data => {
    return <RenderItemSwipeList data={data} />;
  };
  const renderHiddenItem = (data: ItemModel, rowMap: any) => {
    return <HiddenEllement data={data} rowMap={rowMap} />;
  };
  return (
    <View style={styles.collectingContainer}>
      <SwipeListView
        data={basketUserState}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        disableRightSwipe={true}
        rightOpenValue={-180}
        stopRightSwipe={-201}
        swipeToOpenPercent={10}
        swipeToClosePercent={10}
        useNativeDriver={false}
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  collectingContainer: {flex: 4},
});
