import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addRow, selectTable } from "./tableSlice"+"2";
import { store } from "../../app/store";

export default function MyTableApp2() {
  const table = useAppSelector(selectTable);
  const dispatch = useAppDispatch();
  const [inputRow, setRowOfState] = useState(table[table.length - 1]);
  let test = store.getState();
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 10 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell align="left">
                <b>Punkte</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
          dispatch(addRow({ name: inputRow.name, value: inputRow.value }))
        }
      >
        Zeile hinzufügen
      </button>
    </>
  );
}
