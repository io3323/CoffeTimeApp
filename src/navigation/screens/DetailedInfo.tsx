import {DetailComponent} from '../../components/detailComponent/DetailComponent';
import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {LogBox} from 'react-native';

export const DetailedInfo = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <DetailComponent />
    </Provider>
  );
};
