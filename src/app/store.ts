import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tableReducer1 from '../features/Table/tableSlice1'
import tableReducer2 from '../features/Table/tableSlice2'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    table1: tableReducer1,
    table2: tableReducer2
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
