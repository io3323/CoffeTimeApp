import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {addElement} from '../../redux/reduxStateSlice/coordinateSlice';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import mesto from '../../assets/image/mapScreen/mesto.png';
import {addMarkers} from '../../redux/reduxStateSlice/coordinateMasSplice';
import mapDarkStyle from '../MapComponent/mapDarkStyle.json';
import {light} from '../../themeNameApp';
import {requestLocationPermission} from '../../externalFunctions/mapScreen/requestLocationPermission';
import {LocatedIconElement} from './mapElement/LocatedIconElement';
import {SearchIconElemen} from './mapElement/SearchIconElemen';
import {MapInfoElement} from './mapElement/MapInfoElement';
export const MapComponent = () => {
  const coffeDataState = useSelector(
    (state: RootState) => state.coffeDataState,
  );
  const coordinateMasState = useSelector(
    (state: RootState) => state.coordinateMasState,
  );
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.themeState);
  useEffect(() => {
    dispatch(addMarkers(coffeDataState));
  }, []);
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            dispatch(addElement(position));
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <View>
      <View>
        <MapView
          onPress={e => console.log(e.target)}
          customMapStyle={themeState.theme == light ? [] : mapDarkStyle}
          region={{
            latitude: 46.834159,
            longitude: 29.624785,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          // region={{
          //   latitude: coordinateState.latitude,
          //   longitude: coordinateState.longitude,
          //   latitudeDelta: 0.015,
          //   longitudeDelta: 0.0121,
          // }}
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
          <LocatedIconElement />
          <SearchIconElemen />
        </View>
        <MapInfoElement />
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
  markerStyle: {
    width: 105,
    height: 105,
  },
});
