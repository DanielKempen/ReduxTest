import React, { useReducer } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import MyTableApp from "./features/Table/MyTable";
import MyTableApp2 from "./features/Table/MyTable2";
import MyTableApp3 from "./features/Table/MyTable3";
import Paper from "@mui/material/Paper";
import tableReducer from "./features/Table/TableReducer";

import {
  ITableAction,
  ITableState,
  ITable,
  ITableRow,
} from "../src/features/Table/TableInterfaces";

export const StateContext = React.createContext<ITableState>({
  table: [{ name: "Hans", value: 35 }],
});
export const DispatchContext = React.createContext<
  React.Dispatch<ITableAction>
>(() => undefined);
function App() {
  const initTableState = {
    table: [{ name: "Kübbes", value: 18 }] as ITable,
  };

  const [state, dispatch] = useReducer(tableReducer, initTableState);
  return (
    <>
      <div className="App">
        <Paper>
          Tabelle1:
          <MyTableApp></MyTableApp>
          <MyTableApp2></MyTableApp2>
        </Paper>
        <Paper>Nächste Tabelle:</Paper>
      </div>
      <p>Neue Tabelle mit react reducer hook:</p>
      <div>
        <DispatchContext.Provider value={dispatch}>
          <StateContext.Provider value={state}>
            <MyTableApp3></MyTableApp3>
          </StateContext.Provider>
        </DispatchContext.Provider>
      </div>
    </>
  );
}

export default App;
