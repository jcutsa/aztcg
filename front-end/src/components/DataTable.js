import React from "react"
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";





const DataTable = ({

    rows, 
    columns,
}) => {
    
  return (
    <DataGrid

    disableRowSelectionOnClick 

    slots={{
      toolbar: GridToolbar,
    }}
        rows = {rows}
        columns={columns}
    />
  );
};

export default DataTable