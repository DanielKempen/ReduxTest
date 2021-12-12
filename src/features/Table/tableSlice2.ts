import { RootState, AppThunk } from "../../app/store";
import { TableSliceFactory } from "./TableSliceFactory";

let factory = new TableSliceFactory();

export const tableSlice2 = factory.createSliceInstance("tableSliceReducer2",{name:"Hubert", value:23} )

export const { addRow } = tableSlice2.actions;

export const selectTable = (state: RootState) => state.table2;

export default tableSlice2.reducer;
