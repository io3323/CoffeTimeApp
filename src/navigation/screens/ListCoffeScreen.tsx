import {ListComponent} from '../../components/listComponent/ListComponent';
import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {View} from 'react-native';
export const ListCoffeScreenName = 'ListCoffeScreen';
export const ListCoffeScreen = () => {
  return (
    <Provider store={store}>
      <View>
        <ListComponent />
      </View>
    </Provider>
  );
};
