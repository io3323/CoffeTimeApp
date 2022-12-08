import {SafeAreaView, Text, View} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import store, {RootState} from '../../redux/reduxStore/store';
import {OrderComponent} from '../../components/orderComponent/OrderComponent';

export const OrderScreen = () => {
  return (
    <Provider store={store}>
      <OrderComponent />
    </Provider>
  );
};
