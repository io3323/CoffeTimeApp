import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  addElement,
  Coordinate,
} from '../../redux/reduxStateSlice/coordinateSlice';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import mesto from '../../assets/image/mapScreen/mesto.png';
import located from '../../assets/image/mapScreen/located.png';
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
    const config = {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 3600000,
    };
    if (controllerPosition) {
      Geolocation.getCurrentPosition(
        info => {
          const payloadAmmount: Coordinate = info.coords;
          dispatch(addElement(payloadAmmount));
          console.log('INFO', info);
          setController(false);
        },
        error => console.log('ERROR', error),
        config,
      );
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
  }, [coffeDataState, dispatch]);
  useEffect(() => {
    getLocationUser();
    console.log('effect')
  }, []);
  const Separator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View>
      <View>
        <MapView
          onPress={e => console.log(e.target)}
          initialRegion={{
            //MARK: - для работы автоопределения координат заменить статичные значени lat и lon на динамические
            //latitude: coordinateState.latitude,
            latitude: 46.834159,
            //longitude: coordinateState.longitude,
            longitude: 29.624785,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          style={styles.mapView}>
          {coordinateMasState.map(marker => (
            <Marker
              coordinate={marker}
              image={mesto}
              style={styles.markerStyle}
            />
          ))}
        </MapView>
      </View>
      <View style={styles.mapInfo}>
        <View style={styles.rowConteiner}>
          <View style={styles.locatedConteiner}>
            <TouchableOpacity onPress={() => getLocationUser()}>
              <Image source={located} style={styles.locatedIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.locatedSearch}>
            <TouchableOpacity>
              <Image source={search} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardStyle}>
          <View style={styles.blockConteiner}>
            <Text style={styles.textCafe}>CoffeTime</Text>
            <Separator />
            <Text style={styles.subText}>900 м =15 минут</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    width: '100%',
    height: '100%',
  },
  mapView: {
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
    marginLeft: '8.2%',
  },
  textCafe: {
    color: '#474747',
    fontSize: 30,
    marginTop: 5,
    fontFamily: 'Lobster-Regular',
    marginLeft: '10.1%',
  },
  subText: {
    color: '#bbbbbb',
    fontSize: 20,
    marginTop: 5,
    marginLeft: '10.1%',
  },
  searchIcon: {
    width: 45,
    height: 45,
  },
  locatedIcon: {
    width: 45,
    height: 45,
  },
  blockConteiner: {
    backgroundColor: 'white',
    width: 287,
    height: 130,
    alignItems: 'flex-start',
  },
  mapInfo: {
    width: '100%',
    height: 220,
    marginTop: -200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowConteiner: {
    flexDirection: 'row',
    width: 287,
  },
  cardStyle: {
    alignItems: 'center',
    marginTop: 20,
  },
  locatedConteiner: {
    width: '50%',
  },
  locatedSearch: {
    width: '50%',
    alignItems: 'flex-end',
  },
  markerStyle: {
    width: 105,
    height: 105,
  },
});
