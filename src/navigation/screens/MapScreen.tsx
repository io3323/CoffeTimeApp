import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {MapComponent} from '../../components/MapComponent/MapComponent';
import {LogBox} from 'react-native';
export const MapScreenName = 'MapScreen';
LogBox.ignoreAllLogs();
export const MapScreen = () => {
  return (
    <Provider store={store}>
      <MapComponent />
    </Provider>
  );
};
