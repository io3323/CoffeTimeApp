import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {IBasketUser} from '../../../redux/reduxStateSlice/basketUserSlice';
import {RenderItemSwipeList} from './renderElement/RenderItemSwipeList';
import {useRef} from 'react';

export const SwipeListElement = () => {
  const scrollRef = useRef(null);
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const renderItem: ListRenderItem<IBasketUser> = data => {
    return <RenderItemSwipeList data={data} simultaneousHandlers={scrollRef} />;
  };
  return (
    <View style={styles.collectingContainer}>
      <FlatList
        ref={scrollRef}
        data={basketUserState}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  collectingContainer: {flex: 4},
});
