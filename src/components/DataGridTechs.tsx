import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { TechContext } from "../contexts";
import { LIGHT_TAN_COLOR } from "../constants/colors";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 130,
  },
  {
    field: "applies_to",
    headerName: "Applies To",
    width: 200,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "age",
    headerName: "Age",
    width: 200,
  },
  {
    field: "build_time",
    headerName: "Build Time",
    width: 200,
  },
];

export default function DataGridTechs() {
  const techs = useContext(TechContext);
  return (
    <Box sx={{ height: "90vh", width: "100%" }}>
      <DataGrid
        rows={techs ?? ["None"]}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ backgroundColor: LIGHT_TAN_COLOR }}
      />
    </Box>
  );
}
