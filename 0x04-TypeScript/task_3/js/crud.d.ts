export type RowID = number;

export interface RowElement {
     firstname : string ;
    lastname : string ;
    age?: number;
}

import { RowId , RowElement} from "./interface"

declare function insertRow(row: RowElement): number;
//export function insertRow(row: RowElement): RowID;
//export function deleteRow(row : RowID): void;
declare function deleteRow(rowId: RowID): void
declare function updateRow(RowElement,RowID): RowID;
