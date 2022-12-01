import {View} from 'react-native';
import {ListComponent} from '../../components/listComponent/ListComponent';
import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
export const ListCoffeScreenName = 'ListCoffeScreen';
export const ListCoffeScreen = () => {
  return (
    <Provider store={store}>
      <ListComponent />
    </Provider>
  );
};
