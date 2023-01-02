import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface ICoordinateMas {
  latitude: number;
  longitude: number;
}
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
    addMarkers(state, action: PayloadAction<ICoordinateMas>) {
      state.push(action.payload);
    },
    backInitialStateMarkers(state) {
      state = initialMarkersState;
    },
  },
});

export default coordinateMasSplice.reducer;
export const {addMarkers, backInitialStateMarkers} =
  coordinateMasSplice.actions;
