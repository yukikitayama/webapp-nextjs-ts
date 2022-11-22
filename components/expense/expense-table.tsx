import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  { id: 1, col1: "2022-11-21", col2: "grocery", col3: 10, col4: "grocery outlet" },
  { id: 2, col1: "2022-11-22", col2: "grocery", col3: 5, col4: "grocery outlet" },
  { id: 3, col1: "2022-11-23", col2: "tennis", col3: 20, col4: "palo alto tennis shop" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Date", width: 150 },
  { field: "col2", headerName: "Category", width: 150 },
  { field: "col3", headerName: "Amount", width: 150 },
  { field: "col4", headerName: "Place", width: 150 },
];

const ExpenseTable = () => {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default ExpenseTable;
