import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {CardShop} from '../customElement/CardShop';
import {useCallback, useEffect} from 'react';
import {
  deleteProduct,

} from '../../../redux/reduxStateSlice/basketUserSlice';
export const ReanimatedSwipeElement = () => {
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const dispatch = useDispatch();
  const onDismiss = useCallback((id: string) => {
    console.log(id);
    dispatch(deleteProduct(id));
  }, []);
  useEffect(() => {
    console.log('render');
  }, [basketUserState]);
  console.log(basketUserState, 'basket');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center'}}>
        {basketUserState.map(userData => (
          <View>
            <CardShop renderCard={userData} onDismiss={onDismiss} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
