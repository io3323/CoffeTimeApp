import {Provider} from 'react-redux';
import store from '../../../redux/reduxStore/store';
import {CustomBagShopButton} from './CustomBagShopButton';

export const ShopListButton = () => {
  return (
    <Provider store={store}>
      <CustomBagShopButton />
    </Provider>
  );
};
