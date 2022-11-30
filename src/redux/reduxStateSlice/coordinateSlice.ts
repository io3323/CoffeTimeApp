import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Coordinate = {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
};
export const initialCoordinateState: Coordinate = {
  accuracy: 0,
  altitude: 0,
  altitudeAccuracy: 0,
  heading: 0,
  latitude: 0,
  longitude: 0,
  speed: 0,
};
export const coordinateSlice = createSlice({
  name: 'coordinateState',
  initialState: initialCoordinateState,
  reducers: {
    addElement(state, action: PayloadAction<Coordinate>) {
      state.accuracy = action.payload.accuracy;
      state.altitude = action.payload.altitudeAccuracy;
      state.altitudeAccuracy = action.payload.altitudeAccuracy;
      state.heading = action.payload.heading;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.speed = action.payload.longitude;
    },
  },
});

export default coordinateSlice.reducer;
export const {addElement} = coordinateSlice.actions;
