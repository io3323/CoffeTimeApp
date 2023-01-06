import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GeoPosition} from 'react-native-geolocation-service';

export type Coordinate = {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null | undefined;
  heading: number | null;
  speed: number | null;
  timestamp: number | null;
};
export const initialCoordinateState: Coordinate = {
  accuracy: 0,
  altitude: 0,
  altitudeAccuracy: 0,
  heading: 0,
  latitude: 0,
  longitude: 0,
  speed: 0,
  timestamp: 0,
};
export const coordinateSlice = createSlice({
  name: 'coordinateState',
  initialState: initialCoordinateState,
  reducers: {
    addElement(state, action: PayloadAction<GeoPosition>) {
      state.accuracy = action.payload.coords.accuracy;
      state.altitude = action.payload.coords.altitude;
      state.altitudeAccuracy = action.payload.coords.altitudeAccuracy;
      state.heading = action.payload.coords.heading;
      state.latitude = action.payload.coords.latitude;
      state.longitude = action.payload.coords.longitude;
      state.speed = action.payload.coords.speed;
      state.timestamp = action.payload.timestamp;
    },
  },
});

export default coordinateSlice.reducer;
export const {addElement} = coordinateSlice.actions;
