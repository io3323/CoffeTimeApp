import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DetailComponent} from '../../components/detailComponent/DetailComponent';
import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';

export const DetailedInfo = () => {
  return (
    <Provider store={store}>
      <DetailComponent />
    </Provider>
  );
};
