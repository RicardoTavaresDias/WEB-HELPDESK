import { PanelColumn } from "./panelColumn";
import { PanelRoot } from "./PanelRoot";
import { PanelRows } from "./panelRows";
import { TableBody } from "./tableBody";
import { TableCell } from "./tableCell";
import { TableHead } from "./tableHead";
import { TableHeader } from "./tableHeader";
import { TableRoot } from "./tableRoot";

export const Panel = {
  Root: PanelRoot,
  Column: PanelColumn,
  Rows: PanelRows
}


export const Table = {
  Root: TableRoot,
  Head: TableHead,
  Header: TableHeader,
  Body: TableBody,
  Cell: TableCell
}