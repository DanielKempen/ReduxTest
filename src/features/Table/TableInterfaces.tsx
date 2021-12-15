export interface ITableRow {
  name: string;
  value: number;
}

export interface ITable extends Array<ITableRow> {}

export interface ITableProps {
  table: ITable;
}

export interface ITableState {
  table: ITable;
}

export interface ITableAction {
  type: string;
  payload: ITableRow;
}
