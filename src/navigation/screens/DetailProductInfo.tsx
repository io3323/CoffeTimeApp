import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {DetaProductComponent} from '../../components/detailProductComponent/DetaProductComponent';

export const DetailProductInfo = () => {
  return (
    <Provider store={store}>
      <DetaProductComponent />
    </Provider>
  );
};
