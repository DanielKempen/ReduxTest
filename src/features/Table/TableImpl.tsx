import { ITable, ITableRow } from "./TableInterfaces";
export class TableImpl implements ITable {
  rows: ITableRow[] = [];
}
