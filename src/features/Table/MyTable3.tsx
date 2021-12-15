import React, { useContext, useReducer, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addRow, selectTable } from "./tableSlice2";
import { store } from "../../app/store";
import { ITable } from "./TableInterfaces";
import InnerTableWithReactReducer3 from "./InnerTableWithReactReducer3";
import tableReducer from "./TableReducer";
import { DispatchContext } from "../../App";
import { StateContext } from "../../App";
export default function MyTableApp3() {
  const dispatch = useContext(DispatchContext);
  const stateContext = useContext(StateContext);
  const table = stateContext.table;
  const [inputRow, setRowOfState] = useState(table[table.length - 1]);
  let test = store.getState();

  return (
    <>
      <InnerTableWithReactReducer3></InnerTableWithReactReducer3>
      <a>
        Name{" "}
        <input
          aria-label="inputName"
          value={inputRow.name}
          onChange={(evt) =>
            setRowOfState({ name: evt.target.value, value: inputRow.value })
          }
        />
        Punkte{" "}
        <input
          aria-label="inputValue"
          value={inputRow.value}
          onChange={(evt) =>
            setRowOfState({
              name: inputRow.name,
              value: parseInt(evt.target.value),
            })
          }
        />
      </a>
      <button
        onClick={() =>
          dispatch({
            type: "add",
            payload: { name: inputRow.name, value: inputRow.value },
          })
        }
      >
        Zeile hinzufügen
      </button>
    </>
  );
}
