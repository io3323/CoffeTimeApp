import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {MapComponent} from '../../components/MapComponent/MapComponent';
import {GoogleMapComponent} from '../../components/MapComponent/GoogleMapComponent';
export const MapScreenName = 'MapScreen';
export const MapScreen = () => {
  return (
    <Provider store={store}>
      <MapComponent />
    </Provider>
  );
};
