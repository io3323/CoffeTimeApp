import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  addElement,
  Coordinate,
} from '../../redux/reduxStateSlice/coordinateSlice';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
// @ts-ignore
import mesto from '../../assets/image/mapScreen/mesto.png';
// @ts-ignore
import located from '../../assets/image/mapScreen/located.png';
// @ts-ignore
import search from '../../assets/image/mapScreen/search.png';
import {addMarkers} from '../../redux/reduxStateSlice/coordinateMasSplice';
export const MapComponent = () => {
  type MarkerModel = {
    latitude: number;
    longitude: number;
  };
  const coffeDataState = useSelector(
    (state: RootState) => state.coffeDataState,
  );
  const coordinateMasState = useSelector(
    (state: RootState) => state.coordinateMasState,
  );
  const dispatch = useDispatch();
  const [controllerPosition, setController] = useState(true);
  const getLocationUser = () => {
    if (controllerPosition) {
      Geolocation.getCurrentPosition(info => {
        const payloadAmmount: Coordinate = info.coords;
        dispatch(addElement(payloadAmmount));

        setController(false);
      });
    }
  };
  useEffect(() => {
    coffeDataState.map(data => {
      const first = Object.values(data);
      first.map(secondData => {
        const second = Object.values(secondData);
        second.map(marker => {
          // @ts-ignore
          for (let markerKey in marker) {
            if (markerKey == 'coordinates') {
              const markerSplit = marker[markerKey].split(',', 2);
              const lat = markerSplit[0];
              const lon = markerSplit[1];
              const objectT: MarkerModel = {
                latitude: Number(lat),
                longitude: Number(lon),
              };
              dispatch(addMarkers(objectT));
            }
          }
        });
      });
    });
  }, [coffeDataState]);
  const Separator = () => {
    return <View style={styles.separator} />;
  };
  return (
    // @ts-ignore
    <View>
      {getLocationUser()}
      <MapView
        onPress={e => console.log(e.target)}
        // @ts-ignore
        initialRegion={{
          //MARK: - для работы автоопределения координат заменить статичные значени lat и lon на динамические
          //latitude: coordinateState.latitude,
          latitude: 46.834159,
          //longitude: coordinateState.longitude,
          longitude: 29.624785,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0421,
        }}
        style={{width: '100%', height: '100%'}}>
        {coordinateMasState.map(marker => (
          <Marker coordinate={marker} image={mesto} />
        ))}
      </MapView>
      <View
        style={{
          width: '100%',
          height: 220,
          marginTop: -190,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => getLocationUser()}>
          <Image source={located} style={styles.locatedIcon} />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'white',
            width: 287,
            height: 130,
            marginTop: 55,
            marginLeft: -25,
            alignItems: 'center',
          }}>
          <Text style={styles.textCafe}>CoffeTime</Text>
          <Separator />
          <Text style={styles.subText}>900 м =15 минут</Text>
        </View>
        <TouchableOpacity>
          <Image source={search} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    width: '100%',
    height: '100%',
  },
  mapList: {
    width: 287,
    height: 100,
    backgroundColor: 'white',
    marginTop: 600,
    marginLeft: 50,
    alignItems: 'center',
  },
  separator: {
    width: 200,
    height: 1,
    backgroundColor: '#D8D8D8',
    marginTop: 5,
  },
  textCafe: {
    color: '#4747474',
    fontSize: 30,
    marginTop: 5,
    fontFamily: 'Lobster-Regular',
  },
  subText: {
    color: '#bbbbbb',
    fontSize: 20,
    marginTop: 5,
  },
  searchIcon: {
    width: 45,
    height: 45,
    marginLeft: -35,
  },
  locatedIcon: {
    width: 45,
    height: 45,
    marginLeft: 30,
  },
});
