import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { DataGrid, GridRowsProp, GridColDef, GridEventListener } from "@mui/x-data-grid";

// const rows: GridRowsProp = [
//   { id: 1, col1: "2022-11-21", col2: "grocery", col3: 10, col4: "grocery outlet" },
//   { id: 2, col1: "2022-11-22", col2: "grocery", col3: 5, col4: "grocery outlet" },
//   { id: 3, col1: "2022-11-23", col2: "tennis", col3: 20, col4: "palo alto tennis shop" },
// ];

// flex defines ratio for column width
const columns: GridColDef[] = [
  { field: "date", headerName: "Date", type: "date", flex: 1, headerAlign: "center", align: "center" },
  { field: "item", headerName: "Category", type: "string", flex: 1, headerAlign: "center", align: "center" },
  { field: "amount", headerName: "Amount", type: "number", flex: 1, headerAlign: "center", align: "center" },
  { field: "place", headerName: "Place", type: "string", flex: 1, headerAlign: "center", align: "center" },
];

const ExpenseTable = () => {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/expenses`;
      const response = await fetch(url);
      const fetchedData = await response.json();
      setRows(fetchedData);
    };

    fetchData();
  }, []);

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    router.push(`/expense/update-expense/${params.id}`);
  };

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100, 200]}
        onRowClick={handleRowClick}
        density="compact"
      />
    </div>
  );
};

export default ExpenseTable;
