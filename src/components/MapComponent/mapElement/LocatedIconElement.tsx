import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {light} from '../../../themeNameApp';
import located from '../../../assets/image/mapScreen/located.png';
import locatedDark from '../../../assets/image/mapScreen/locatedDark.png';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import Geolocation from 'react-native-geolocation-service';
import {addElement} from '../../../redux/reduxStateSlice/coordinateSlice';
import {requestLocationPermission} from '../../../externalFunctions/mapScreen/requestLocationPermission';

export const LocatedIconElement = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const dispatch = useDispatch();
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
  return (
    <View style={styles.locatedContainer}>
      <TouchableOpacity onPress={() => getLocation()}>
        <Image
          source={themeState.theme == light ? located : locatedDark}
          style={styles.locatedIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  locatedContainer: {
    width: '50%',
  },
  locatedIcon: {
    width: 45,
    height: 45,
  },
});
