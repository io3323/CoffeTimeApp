import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ICounter {
  idPredmet: string;
  count: number;
}
export const initialCounterState: Array<ICounter> = [
  {
    idPredmet: '',
    count: 0,
  },
];
export const counterSlice = createSlice({
  name: 'counterState',
  initialState: initialCounterState,
  reducers: {
    addCountIncrement(state, action: PayloadAction<ICounter>) {
      let count = 0;
      state.forEach((data, index) => {
        if (data.idPredmet == action.payload.idPredmet) {
          const obj: ICounter = {
            idPredmet: action.payload.idPredmet,
            count: data.count + 1,
          };
          state.splice(index, 1, obj);
          state.pop();
        } else {
          if (count == 0) {
            state.push(action.payload);
            count += 1;
          }
        }
      });
    },
    addCountDecrement(state, action: PayloadAction<ICounter>) {
      let count = 0;
      state.forEach((data, index) => {
        if (data.idPredmet == action.payload.idPredmet) {
          const obj: ICounter = {
            idPredmet: action.payload.idPredmet,
            count: data.count - 1,
          };
          state.splice(index, 1, obj);
          state.pop();
        } else {
          if (count == 0) {
            state.push(action.payload);
            count += 1;
          }
        }
      });
    },
  },
});

export default counterSlice.reducer;
export const {addCountIncrement, addCountDecrement} = counterSlice.actions;
