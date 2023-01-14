import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {AuthComponent} from '../../components/authScreen/AuthComponent';
LogBox.ignoreLogs(['Require cycle:']);
export const AuthScreen = () => {
  return (
    <Provider store={store}>
      <AuthComponent />
    </Provider>
  );
};
