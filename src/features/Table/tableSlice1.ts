import { RootState } from "../../app/store";
import { TableSliceFactory } from "./TableSliceFactory";

let factory = new TableSliceFactory();
let tableSlice = factory.createSliceInstance("tableSliceReducer1", {name:"Max1", value: 18})

export const { addRow } = tableSlice.actions;

export const selectTable = (state: RootState) => state.table1;

export default tableSlice.reducer;
