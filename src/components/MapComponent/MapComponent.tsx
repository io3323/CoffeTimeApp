import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {addElement} from '../../redux/reduxStateSlice/coordinateSlice';
import {
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Animated from 'react-native-reanimated';
import mesto from '../../assets/image/mapScreen/mesto.png';
import located from '../../assets/image/mapScreen/located.png';
import search from '../../assets/image/mapScreen/search.png';
import locatedDark from '../../assets/image/mapScreen/locatedDark.png';
import searchDark from '../../assets/image/mapScreen/searchDark.png';
import {addMarkers} from '../../redux/reduxStateSlice/coordinateMasSplice';
import mapDarkStyle from '../MapComponent/mapDarkStyle.json';
import {light} from '../../themeNameApp';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {MapColorObject} from './MapColorObject';
import {useTranslation} from 'react-i18next';
const requestLocationPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      const auth = await Geolocation.requestAuthorization('whenInUse');
      if (auth === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    }
    if (Platform.OS == 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    }
  } catch (err) {
    return false;
  }
};
export const MapComponent = () => {
  const {t} = useTranslation();
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
  const Separator = () => {
    return <View style={styles.separator} />;
  };
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
  const progress = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  const rStyleText = useAnimatedStyle(() => {
    const textColor = interpolateColor(
      progress.value,
      [0, 1],
      [MapColorObject.textColorLight, MapColorObject.textColorDark],
    );
    return {
      color: textColor,
    };
  });
  const rStyleBlockBack = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1],
      [
        MapColorObject.blockContBackgroundLight,
        MapColorObject.blockContBackgroundDark,
      ],
    );
    return {
      backgroundColor: background,
    };
  });
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
          <View style={styles.locatedConteiner}>
            <TouchableOpacity onPress={() => getLocation()}>
              <Image
                source={themeState.theme == light ? located : locatedDark}
                style={styles.locatedIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.locatedSearch}>
            <TouchableOpacity>
              <Image
                source={themeState.theme == light ? search : searchDark}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardStyle}>
          <Animated.View style={[styles.blockConteiner, rStyleBlockBack]}>
            <Animated.Text style={[styles.textCafe, rStyleText]}>
              CoffeTime
            </Animated.Text>
            <Separator />
            <Text style={styles.subText}>{t('common:mapScreen:distance')}</Text>
          </Animated.View>
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
