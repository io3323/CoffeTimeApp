import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CoffeModel} from './dataSlice';
export interface ICoordinateMas {
  latitude: number;
  longitude: number;
}
type MarkerModel = {
  latitude: number;
  longitude: number;
};
const initialMarkersState: Array<ICoordinateMas> = [
  {
    latitude: 0,
    longitude: 0,
  },
];
export const coordinateMasSplice = createSlice({
  name: 'coordinateMasState',
  initialState: initialMarkersState,
  reducers: {
    addMarkers(state, action: PayloadAction<Array<CoffeModel>>) {
      const stateLength = state.length;
      if (stateLength == 1) {
        state.pop();
      } else if (stateLength > 1) {
        let counter = 0;
        while (counter != stateLength) {
          state.pop();
          counter += 1;
        }
      }
      action.payload.map(marker => {
        const markerSplit = marker.coordinates.split(',', 2);
        const lat = markerSplit[0];
        const lon = markerSplit[1];
        const objectT: MarkerModel = {
          latitude: Number(lat),
          longitude: Number(lon),
        };
        state.push(objectT);
      });
    },
  },
});

export default coordinateMasSplice.reducer;
export const {addMarkers} = coordinateMasSplice.actions;
