import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {DetailProductComponent} from '../../components/detailProductComponent/DetailProductComponent';

export const DetailProductInfo = () => {
  return (
    <Provider store={store}>
      <DetailProductComponent />
    </Provider>
  );
};
