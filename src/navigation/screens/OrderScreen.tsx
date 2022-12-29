import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {OrderComponent} from '../../components/orderComponent/OrderComponent';

export const OrderScreen = () => {
  return (
    <Provider store={store}>
      <OrderComponent />
    </Provider>
  );
};
