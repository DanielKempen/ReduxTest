import {ITableState, ITableAction} from './TableInterfaces'
function TableReducer(state: ITableState, action: ITableAction): ITableState {
    switch (action.type) {
        case "add" :
            return { 
                ...state,
                table: [...state.table, action.payload]
            }
    default: 
    return state;
}
}

export default TableReducer