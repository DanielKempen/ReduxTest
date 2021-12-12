import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITableRow } from "./TableInterfaces";

export class TableSliceFactory {
  createSliceInstance(nameReducer: string, initialValue: { name: string, value: number }) {
    let slice = createSlice({
      name: nameReducer,
      initialState: [initialValue],
      // The `reducers` field lets us define reducers and generate associated actions
      reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addRow: (state, action: PayloadAction<ITableRow>) => {
          state.push(action.payload);
        },
      },
    })
    return slice;
  }
}