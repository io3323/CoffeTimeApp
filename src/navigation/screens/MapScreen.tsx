import {View, Text, StyleSheet} from 'react-native';
import {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {
  addElement,
  Coordinate,
} from '../../redux/reduxStateSlice/coordinateSlice';
import MapView from 'react-native-maps';
export const MapScreenName = 'MapScreen';
export const MapScreen = () => {
  const coordinateState = useSelector(
    (state: RootState) => state.coordinateState,
  );
  const dispatch = useDispatch();
  const [controllerPosition, setController] = useState(true);
  const getLocationUser = () => {
    if (controllerPosition) {
      Geolocation.getCurrentPosition(info => {
        //console.log(info.coords);
        const payloadAmmount: Coordinate = info.coords;
        dispatch(addElement(payloadAmmount));
        setController(false);
      });
    }
  };
  return (
    // @ts-ignore
    <View>
      {getLocationUser()}
      <MapView
        // @ts-ignore
        initialRegion={{
          //MARK: - для работы автоопределения координат заменить статичные значени lat и lon на динамические
          //latitude: coordinateState.latitude,
          latitude: 46.84923,
          //longitude: coordinateState.longitude,
          longitude: 29.59563,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0421,
        }}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    width: '100%',
    height: '100%',
    //backgroundColor: 'red',
  },
});
