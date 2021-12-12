import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import MyTableApp from "./features/Table/MyTable";
import MyTableApp2 from "./features/Table/MyTable2";
import Paper from "@mui/material/Paper";

function App() {
  return (
    <div className="App">
      <Paper>
        Tabelle1:
        <MyTableApp></MyTableApp>
        <MyTableApp2></MyTableApp2>
      </Paper>
      <Paper>Nächste Tabelle:</Paper>
    </div>
  );
}

export default App;
